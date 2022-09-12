import PropTypes from 'prop-types'

const AMessage = ({ senderNickname, text }) => {
  return (
    <div>
      <span className="text-sm underline">{senderNickname}</span>
      <p className="tracking-wide">{text}</p>
    </div>
  )
}

AMessage.propTypes = {
  senderNickname: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default AMessage
