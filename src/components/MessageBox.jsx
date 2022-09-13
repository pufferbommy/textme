import { useEffect } from 'react'
import { useState } from 'react'
import AMessage from './AMessage'
import { db } from '../firebase'
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore'

const MessageBox = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'))
    const unsubscribe = onSnapshot(q, ({ docs }) => {
      const messages = docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setMessages(messages)
    })
    return () => unsubscribe()
  }, [])

  return (
    <div className="rounded-lg flex-1">
      {messages.map((message) => (
        <AMessage key={message.id} message={message} />
      ))}
    </div>
  )
}

export default MessageBox
