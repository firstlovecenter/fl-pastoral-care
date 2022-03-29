import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@chakra-ui/react'
import { useQuery } from '@apollo/client'
import { GET_MEMBERS } from '../queries/fetch-members'
// import { member, members } from '../queries/member-types'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  let navigate = useNavigate()

  function navigateDash() {
    navigate('/landing-page')
  }

  const { loginWithRedirect, isAuthenticated } = useAuth0()
  console.log('test', isAuthenticated)

  return (
    <div>
      {!isAuthenticated ? (
        <Button onClick={() => loginWithRedirect()}>Login</Button>
      ) : (
        { navigateDash }
      )}
    </div>
  )
}

export default Login
