import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css' //CSS da Main.jsx
import Home from './pages/Home/index.jsx'
import Dashboard from './pages/Dashboard/index.jsx'
import CadastrarClientes from './pages/Cadastrar-clientes/index.jsx'
import ConsultarClientes from './pages/Consultar-clientes/index.jsx'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (!isLoggedIn) {
    return <Home onLogin={() => setIsLoggedIn(true)} />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Cadastrar-clientes" element={<CadastrarClientes />} />
        <Route path="/Consultar-clientes" element={<ConsultarClientes />} />
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
