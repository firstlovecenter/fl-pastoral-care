import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/directory/Dashboard'
import LandingPage from './pages/directory/LandingPage'
import MemberList from './pages/directory/membership/AllMembers'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/member-list" element={<MemberList />} />
    </Routes>
  )
}
