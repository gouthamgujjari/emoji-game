import './index.css'

const WinOrLoseCard = ({isWon, score, totalEmojis, onClickPlayAgain}) => {
  const resultImg = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const resultText = isWon ? 'You Won' : 'You Lose'
  const scoreText = isWon ? 'Best Score' : 'Score'

  return (
    <div className="result-card">
      <div className="text-container">
        <h1 className="heading">{resultText}</h1>
        <p className="bestscore">{scoreText}</p>
        <div className="scoreContainer">
          <p className="score">
            {score}/{totalEmojis}
          </p>
          <button
            type="button"
            className="play-again-btn"
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
