import './index.css'

const NavBar = ({score, topScore, isGameInProgress}) => (
  <nav className="navbar">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
        className="logo"
      />
      <h1 className="nav-title">Emoji Game</h1>
    </div>
    {isGameInProgress && (
      <div className="score-container">
        <p className="score-text">Score: {score}</p>
        <p className="score-text">Top Score: {topScore}</p>
      </div>
    )}
  </nav>
)

export default NavBar
