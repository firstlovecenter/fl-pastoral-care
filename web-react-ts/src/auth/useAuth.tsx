import { useAuth0 } from '@auth0/auth0-react'
import { Role } from 'types/global-types'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const useAuth = () => {
  const { currentUser } = useContext(UserContext)
  const { isAuthenticated } = useAuth0()

  const isAuthorised = (permittedRoles: Role[]) => {
    if (isAuthenticated && permittedRoles?.includes('all')) {
      return true
    }

    if (!permittedRoles) {
      return true
    }

    return (
      isAuthenticated &&
      permittedRoles?.some((r) => currentUser?.roles.includes(r))
    )
  }

  return { isAuthorised }
}

export default useAuth
