import MessageBox from './MessageBox'
import MessageSender from './MessageSender'

const ChatBox = () => {
  return (
    <div className="flex-1 border mx-4 sm:mx-0 h-[30rem] flex flex-col rounded-lg gap-4 p-4">
      <MessageBox />
      <MessageSender />
    </div>
  )
}

export default ChatBox
