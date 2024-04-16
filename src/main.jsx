import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import App from './App.jsx'
import Connexion from './pages/Connexion.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Connexion />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
