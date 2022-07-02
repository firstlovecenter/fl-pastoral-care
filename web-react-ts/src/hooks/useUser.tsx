import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const useUser = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const setUser = (user: any) => {
    setCurrentUser &&
      setCurrentUser({
        ...currentUser,
        ...user,
      })

    sessionStorage.setItem(
      'currentUser',
      JSON.stringify({
        ...currentUser,
        ...user,
      })
    )
  }
  const setUserChurch = (church: any) => {
    setCurrentUser &&
      setCurrentUser({
        ...currentUser,
        currentChurch: church,
      })
    sessionStorage.setItem(
      'currentUser',
      JSON.stringify({
        ...currentUser,
        currentChurch: church,
      })
    )
  }

  return { setUser, setUserChurch }
}

export default useUser
