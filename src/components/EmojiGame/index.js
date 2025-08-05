import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojis: [],
    score: 0,
    topScore: 0,
    isGameInProgress: true,
  }

  resetGame = () => {
    this.setState(prevState => ({
      clickedEmojis: [],
      score: 0,
      isGameInProgress: true,
      topScore: Math.max(prevState.score, prevState.topScore),
    }))
  }

  shuffleEmojis = list => list.sort(() => Math.random() - 0.5)

  onClickEmoji = id => {
    const {clickedEmojis, score} = this.state
    const {emojisList} = this.props

    if (clickedEmojis.includes(id)) {
      this.setState({isGameInProgress: false})
    } else {
      const newClicked = [...clickedEmojis, id]
      const newScore = score + 1

      if (newScore === emojisList.length) {
        this.setState(prevState => ({
          clickedEmojis: newClicked,
          score: newScore,
          isGameInProgress: false,
          topScore: Math.max(prevState.topScore, newScore),
        }))
      } else {
        this.setState({
          clickedEmojis: newClicked,
          score: newScore,
        })
      }
    }
  }

  render() {
    const {score, topScore, isGameInProgress} = this.state
    const {emojisList} = this.props
    const shuffledEmojis = this.shuffleEmojis([...emojisList])

    return (
      <div className="emoji-game-bg">
        <NavBar
          score={score}
          topScore={topScore}
          isGameInProgress={isGameInProgress}
        />
        <div className="emoji-game-container">
          {isGameInProgress ? (
            <ul className="emoji-list">
              {shuffledEmojis.map(emoji => (
                <EmojiCard
                  key={emoji.id}
                  emojiDetails={emoji}
                  onClickEmoji={this.onClickEmoji}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              isWon={score === emojisList.length}
              score={score}
              totalEmojis={emojisList.length}
              onClickPlayAgain={this.resetGame}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
