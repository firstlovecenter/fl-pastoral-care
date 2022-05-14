import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/directory/Dashboard'
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
        </Routes>
      </UserContextProvider>
    </ChurchContextProvider>
  )
}
