import PropTypes from 'prop-types'

const AMessage = ({ message }) => {
  const { senderNickname, text } = message
  return (
    <div>
      <span className="text-sm capitalize underline">{senderNickname}</span>
      <p className="tracking-wide">{text}</p>
    </div>
  )
}

AMessage.propTypes = {
  message: PropTypes.object.isRequired,
}

export default AMessage
