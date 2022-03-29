import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import MemberList from './components/memberList'
import LandingPage from './components/LandingPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/member-list" element={<MemberList />} />
    </Routes>
  )
}
