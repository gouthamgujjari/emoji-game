/* Write your code here. */
import './index.css'
import Confetti from 'react-confetti'
import {useWindowSize} from 'react-use'

const WinOrLoseCard = ({isWon, score, totalEmojis, onClickPlayAgain}) => {
  const {width, height} = useWindowSize()

  const resultImg = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const resultText = isWon ? 'You Won' : 'You Lose'
  const scoreText = isWon ? 'Best Score' : 'Score'

  return (
    <div className="result-card">
      {isWon && <Confetti width={width} height={height} recycle={false} />}

      <div className="text-container">
        <h1 className="heading">{resultText}</h1>
        <p className="bestscore">{scoreText}</p>
        <div className="scoreContainer">
          <p className="score">
            {score}/{totalEmojis}
          </p>
          <button
            type="button"
            className="btn neon-pulse"
            onClick={onClickPlayAgain}
          >
            Play Again
          </button>
        </div>
      </div>
      <img src={resultImg} alt="win or lose" className="result-img" />
    </div>
  )
}

export default WinOrLoseCard