import MessageBox from './MessageBox'
import MessageSender from './MessageSender'

const Chat = () => {
  return (
    <div className="flex-1 border flex flex-col rounded-lg gap-4 p-4">
      <MessageBox />
      <MessageSender />
    </div>
  )
}

export default Chat
