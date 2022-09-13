import { useRef } from 'react'
import { db } from '../firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

const MessageSender = () => {
  const textareaRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const { value } = textareaRef.current
    addDoc(collection(db, 'messages'), {
      senderNickname: JSON.parse(localStorage.getItem('currentMember'))
        .nickname,
      text: value,
      timestamp: serverTimestamp(),
    })
    textareaRef.current.value = ''
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <textarea
        ref={textareaRef}
        className="textarea textarea-bordered w-full resize-none"
        placeholder="Type here"
        required
      />
      <button
        type="submit"
        className="absolute btn btn-accent btn-sm bottom-4 right-2"
      >
        Send
      </button>
    </form>
  )
}

export default MessageSender
