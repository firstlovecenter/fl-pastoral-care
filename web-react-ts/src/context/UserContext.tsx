import { createContext, useEffect, useState } from 'react'
import { ChurchEnum, RolesEnum, StreamEnum } from '../hooks/useClickCard'
import { Bacenta } from '../types/church-types'
import { ContextProviderProps } from './context.types'

export interface UserInterface {
  id: string
  picture: string
  firstName: string
  lastName: string
  fullName: string
  church: { church: StreamEnum; subChurch: ChurchEnum }
  email: string
  constituency: string
  roles: RolesEnum[]
  pictureUrl?: string | undefined
  leadsBacenta?: Bacenta[] | undefined
}

interface UserContextInterface {
  currentUser: UserInterface
  setCurrentUser: React.Dispatch<any>
  theme: string
  setTheme?: React.Dispatch<React.SetStateAction<string>>
}

const initialCurrentUser = {
  id: '',
  picture: '',
  firstName: '',
  lastName: '',
  fullName: '',
  bishop: '',
  church: { church: StreamEnum.Campus, subChurch: ChurchEnum.Bacenta },
  email: '',
  constituency: '',
  roles: [],
}

export const UserContext = createContext<UserContextInterface>({
  currentUser: initialCurrentUser,
  setCurrentUser: (state: UserContextInterface) => {},
  theme: 'dark',
})

export const UserContextProvider = ({ children }: ContextProviderProps) => {
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
    <UserContext.Provider
      value={{ currentUser, setCurrentUser, theme, setTheme }}
    >
      <div className={`bg ${theme}`}>{children}</div>
    </UserContext.Provider>
  )
}
