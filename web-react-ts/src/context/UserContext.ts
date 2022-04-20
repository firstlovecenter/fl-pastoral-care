import { createContext } from 'react'
import { StreamNameType } from '../hooks/useClickCard'

export interface UserInterface {
  id: string
  picture: string
  firstName: string
  lastName: string
  fullName: string
  church: { church: StreamNameType; subChurch: 'bacenta' }
  email: string
  constituency: string
  roles: []
}

interface UserContextInterface {
  currentUser: UserInterface
  setCurrentUser: React.Dispatch<any>
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

export const UserContext = createContext<UserContextInterface | null>(null)
