import OnlineMember from './OnlineMember'

const nicknames = [
  'bommy',
  'flukky',
  'manly',
  'donly',
  'kanny',
  'kanny',
  'kanny',
  'kanny',
  'kanny',
]

const MemberBox = () => {
  return (
    <div className="flex-1 overflow-y-auto sm:flex-[1.5] mx-4 sm:mx-0 p-4">
      <div className="flex gap-6 justify-center sm:justify-start flex-wrap">
        {nicknames.map((nickname, idx) => (
          <OnlineMember key={nickname + idx} nickname={nickname} />
        ))}
      </div>
    </div>
  )
}

export default MemberBox
