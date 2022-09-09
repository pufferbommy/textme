import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import NicknameSetter from './pages/NicknameSetter'
import { useEffect } from 'react'

const App = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const nickname = localStorage.getItem('nickname')
    const pathToGo = !nickname ? '/' : '/home'
    navigate(pathToGo)
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
