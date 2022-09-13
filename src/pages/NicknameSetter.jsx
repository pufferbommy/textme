import drawingDogImg from '../assets/hands-of-digital-artist-drawing-cute-comic-dog-on-graphic-tablet.png'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase'

const NicknameSetter = () => {
  const inputRef = useRef(null)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const input = inputRef.current.value.trim()

    addDoc(collection(db, 'members'), {
      isOnline: true,
      nickname: input,
    }).then(({ id }) => {
      localStorage.setItem(
        'currentMember',
        JSON.stringify({ id, nickname: input }),
      )
    })

    navigate('home')
  }

  return (
    <div className="flex flex-col items-center h-screen">
      <img
        className="my-6"
        width={500}
        src={drawingDogImg}
        alt="Hands of digital artist drawing cute comic dog on graphic tablet."
      />
      <form onSubmit={handleSubmit} className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Your nickname?</span>
        </label>
        <input
          ref={inputRef}
          autoComplete="off"
          autoFocus
          required
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <button type="submit" className="mt-4 btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default NicknameSetter
