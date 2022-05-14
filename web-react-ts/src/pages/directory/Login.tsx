import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_USER_ROLES } from '../../queries/user-roles.gql'

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()
  const { data, loading, error } = useQuery(GET_USER_ROLES)
  let navigate = useNavigate()

  console.log(data, isAuthenticated)

  if (isAuthenticated) {
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Something went wrong! {error.message}</h1>
  }

  return (
    <div>
      {!isAuthenticated ? (
        <Button onClick={() => loginWithRedirect()}>Login</Button>
      ) : (
        <>{navigate('/profile-choose-page')}</>
      )}
    </div>
  )
}

export default Login
