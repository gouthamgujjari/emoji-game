/* Write your code here. */
import './index.css'

const EmojiCard = ({emojiDetails, onClickEmoji}) => {
  const {id, emojiName, emojiUrl} = emojiDetails

  const handleClick = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button type="button" className="emoji-btn button" onClick={handleClick}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
