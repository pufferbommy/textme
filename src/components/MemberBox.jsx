import { collection, onSnapshot, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import OnlineMember from './OnlineMember'

const MemberBox = () => {
  const [onlineMembers, setOnlineMembers] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'members'))
    const unsubscribe = onSnapshot(q, ({ docs }) => {
      const onlineMembers = docs.reduce((totalOnlineMembers, member) => {
        const { isOnline, nickname } = member.data()
        if (isOnline) {
          totalOnlineMembers.push({
            id: member.id,
            nickname,
          })
        }
        return totalOnlineMembers
      }, [])
      setOnlineMembers(onlineMembers)
    })
    return () => unsubscribe()
  }, [])

  return (
    <div className="flex-1 overflow-y-auto sm:flex-[1.5] mx-4 sm:mx-0 p-4">
      <div className="flex gap-6 justify-center sm:justify-start flex-wrap">
        {onlineMembers?.map(({ id, nickname }) => (
          <OnlineMember key={id} nickname={nickname} />
        ))}
      </div>
    </div>
  )
}

export default MemberBox
