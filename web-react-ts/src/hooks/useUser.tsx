import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const useUser = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext) || {}

  const setUser = (church: any) => {
    // setCurrentUser({
    //   ...currentUser,
    //   currentChurch: church,
    // })
    sessionStorage.setItem(
      'currentUser',
      JSON.stringify({
        ...currentUser,
        currentChurch: church,
      })
    )
  }

  return { currentUser, setCurrentUser, setUser }
}

export default useUser
