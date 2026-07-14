import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' //CSS da Main.jsx
import Home from './pages/Home/Index.jsx'
import Dashboard from './pages/Dashboard/index.jsx'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (isLoggedIn) {
    return <Dashboard />
  }

  return <Home onLogin={() => setIsLoggedIn(true)} />
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
