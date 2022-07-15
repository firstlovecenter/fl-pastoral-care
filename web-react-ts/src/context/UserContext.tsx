import { useAuth0 } from '@auth0/auth0-react'
import { createContext, useState } from 'react'
import { ChurchLevel, Role, StreamOptions } from 'types/global-types'
import { Bacenta } from '../types/church-types'
import { ContextProviderProps } from './context.types'

export interface UserInterface {
  id: string
  picture: string
  firstName: string
  lastName: string
  fullName: string
  church: { church: StreamOptions; subChurch: ChurchLevel }
  email: string
  constituency: string
  roles: Role[]
  pictureUrl?: string | undefined
  leadsBacenta?: Bacenta[] | undefined
}

interface UserContextInterface {
  currentUser: UserInterface
  setCurrentUser: React.Dispatch<any>
}

const initialCurrentUser: UserInterface = {
  id: '',
  picture: '',
  firstName: '',
  lastName: '',
  fullName: '',
  church: { church: 'Campus', subChurch: 'Bacenta' },
  email: '',
  constituency: '',
  roles: ['leaderFellowship'],
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
