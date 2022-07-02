import { useAuth0 } from '@auth0/auth0-react'
import { createContext, useState } from 'react'
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
})

export const UserContextProvider = ({ children }: ContextProviderProps) => {
  const { user } = useAuth0()
  const [currentUser, setCurrentUser] = useState<UserInterface>(
    sessionStorage.getItem('currentUser')
      ? JSON.parse(sessionStorage.getItem('currentUser') ?? '')
      : {
          id: '',
          picture: user?.picture,
          firstName: user?.given_name,
          lastName: user?.family_name,
          fullName: user?.given_name + ' ' + user?.family_name,
          bishop: '',
          church: {},
          email: '',
          constituency: '',
          roles: [],
        }
  )

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  )
}
