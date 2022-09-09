import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { IconContext } from 'react-icons'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <IconContext.Provider value={{ size: '1.5rem' }}>
        <App />
      </IconContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
