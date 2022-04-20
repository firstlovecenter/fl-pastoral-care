import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/directory/Dashboard'
import LandingPage from './pages/directory/LandingPage'
import MemberList from './pages/directory/membership/AllMembers'
import BacentaButtons from './pages/directory/BacentaButtons'
import ProfilePage from './pages/directory/membership/ProfilePage'
import useClickCard from './hooks/useClickCard'
import { ChurchContext } from './context/ChurchContext'
import { UserContext, UserInterface } from './context/UserContext'

export default function App(): JSX.Element {
  const {
    clickCard,
    church,
    memberId,
    gatheringServiceId,
    streamId,
    councilId,
    constituencyId,
    bacentaId,
    fellowshipId,
    sontaId,
    ministryId,
  } = useClickCard()
  const [theme, setTheme] = useState('dark')
  const [currentUser, setCurrentUser] = useState<UserInterface>(
    sessionStorage.getItem('currentUser')
      ? JSON.parse(sessionStorage.getItem('currentUser') ?? '')
      : {
          id: '',
          picture: '',
          firstName: '',
          lastName: '',
          fullName: '',
          bishop: '',
          church: {},
          email: '',
          constituency: '',
          roles: [],
        }
  )

  useEffect(() => {
    if (theme === 'dark') document.body.style.backgroundColor = '#121212'
    else document.body.style.backgroundColor = '#FFFFFF'
  }, [theme])

  return (
    <ChurchContext.Provider
      value={{
        clickCard,
        church,
        memberId,
        gatheringServiceId,
        streamId,
        councilId,
        constituencyId,
        bacentaId,
        fellowshipId,
        sontaId,
        ministryId,
      }}
    >
      <UserContext.Provider
        value={{ currentUser, setCurrentUser, theme, setTheme }}
      >
        <div className={`bg ${theme}`}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/landing-page" element={<LandingPage />} />
            <Route path="/member-list" element={<MemberList />} />
            <Route path="/bacenta-buttons" element={<BacentaButtons />} />
            <Route path="/profile-page" element={<ProfilePage />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </ChurchContext.Provider>
  )
}
