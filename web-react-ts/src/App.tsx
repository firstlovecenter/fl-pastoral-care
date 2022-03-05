import React from 'react'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import LoginPage from './components/pages/Organisms/Login'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  )
}
