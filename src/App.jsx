import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import NicknameSetter from './pages/NicknameSetter'
import { useEffect } from 'react'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from './firebase'

const App = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const currentMember = JSON.parse(localStorage.getItem('currentMember'))

    if (!currentMember) {
      return navigate('/')
    }

    updateDoc(doc(db, 'members', currentMember.id), {
      isOnline: true,
    })

    navigate('/home')

    const handleTabClose = () => {
      updateDoc(doc(db, 'members', currentMember.id), {
        isOnline: false,
      })
    }

    window.addEventListener('unload', handleTabClose)

    return () => {
      window.removeEventListener('unload', handleTabClose)
    }
  }, [])

  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<NicknameSetter />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
