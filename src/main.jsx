import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' //CSS da Main.jsx
import Home from './pages/Home/Index.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
