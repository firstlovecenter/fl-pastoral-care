import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@chakra-ui/react'

const Login = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()
  return (
    <div>
      {!isAuthenticated ? (
        <Button onClick={() => loginWithRedirect()}>Login</Button>
      ) : (
        <Button onClick={() => logout()}>Log Out</Button>
      )}
    </div>
  )
}

export default Login
