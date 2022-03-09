import React from 'react'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import { Auth0ProviderWithHistory } from './auth0-provider-with-history'
import Dashboard from './components/Dashboard'

export default function App() {
  return (
    <Router>
      <Auth0ProviderWithHistory>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Auth0ProviderWithHistory>
    </Router>
  )
}
