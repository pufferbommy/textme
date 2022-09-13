import memberWhite from '../assets/member-white.png'
import PropTypes from 'prop-types'

const OnlineMember = ({ nickname }) => {
  return (
    <div className="text-center">
      <h2 className="text-sm mb-2 capitalize">{nickname}</h2>
      <img className="w-[90px] sm:w-[100px]" src={memberWhite} alt="member" />
    </div>
  )
}

OnlineMember.propTypes = {
  nickname: PropTypes.string.isRequired,
}

export default OnlineMember
