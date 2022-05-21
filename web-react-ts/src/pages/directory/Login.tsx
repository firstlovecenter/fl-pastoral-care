import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()

  let navigate = useNavigate()

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
