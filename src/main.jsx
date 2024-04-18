import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import App from './App.jsx'
import Connexion from './pages/Connexion.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Departement from './pages/Departement.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Connexion />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/departement" element={<Departement />} />

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
