import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/directory/Dashboard'
import { ChurchContextProvider } from './context/ChurchContext'
import { UserContextProvider } from './context/UserContext'
import { directory } from './pages/directory/directoryRoutes'
import ProtectedRoute from './auth/ProtectedRoute'
import Navigation from './components/Navigation'
import { attendance } from './pages/attendance/attendanceRoutes'

export default function App(): JSX.Element {
  return (
    <ChurchContextProvider>
      <UserContextProvider>
        <Navigation />
        <Routes>
          {[...directory, ...attendance].map((route, i) => (
            <Route
              key={i}
              path={route.path}
              element={
                <ProtectedRoute
                //   roles={route.roles ?? ['all']}
                //   placeholder={route.placeholder}
                >
                  <route.element />
                </ProtectedRoute>
              }
            />
          ))}
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </UserContextProvider>
    </ChurchContextProvider>
  )
}
