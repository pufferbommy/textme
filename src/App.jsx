import { Routes, Route, Link } from 'react-router-dom'
import Welcome from './pages/Welcome'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        {/* <Route /> */}
      </Routes>
    </div>
  )
}

export default App
