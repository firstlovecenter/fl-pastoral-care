import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_USER_ROLES } from '../../queries/user-roles.gql'
import useUser from '../../hooks/useUser'

const Login = () => {
  let navigate = useNavigate()

  const { loginWithRedirect, isAuthenticated } = useAuth0()
  const { loading, error, data } = useQuery(GET_USER_ROLES)
  const { setUser } = useUser()

  // setUser(data.members[0])

  if (isAuthenticated) {
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Something went wrong! {error.message}</h1>
  }

  function navigateDash() {
    navigate('/landing-page')
  }

  return (
    <div>
      {!isAuthenticated ? (
        <Button onClick={() => loginWithRedirect()}>Login</Button>
      ) : (
        <>{navigateDash()}</>
      )}
    </div>
  )
}

export default Login
