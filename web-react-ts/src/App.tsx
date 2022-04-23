import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/directory/Dashboard'
import MemberList from './pages/directory/membership/AllMembers'
import BacentaButtons from './pages/directory/BacentaButtons'
import ProfilePage from './pages/directory/membership/ProfilePage'
import { ChurchContextProvider } from './context/ChurchContext'
import { UserContextProvider } from './context/UserContext'
import { directory } from './pages/directory/directoryRoutes'

export default function App(): JSX.Element {
  return (
    <ChurchContextProvider>
      <UserContextProvider>
        <Routes>
          {[...directory].map((route, i) => (
            <Route
              key={i}
              path={route.path}
              element={
                // <ProtectedRoute
                //   roles={route.roles ?? ['all']}
                //   placeholder={route.placeholder}
                // >
                <route.element />
                // </ProtectedRoute>
              }
            />
          ))}
          <Route path="/" element={<Dashboard />} />
          <Route path="/member-list" element={<MemberList />} />
          <Route path="/bacenta-buttons" element={<BacentaButtons />} />
          <Route path="/profile-page" element={<ProfilePage />} />
        </Routes>
      </UserContextProvider>
    </ChurchContextProvider>
  )
}
