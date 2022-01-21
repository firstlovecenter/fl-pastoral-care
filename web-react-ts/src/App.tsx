import React from 'react'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}
