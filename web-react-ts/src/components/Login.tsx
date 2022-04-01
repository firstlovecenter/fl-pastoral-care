import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  let navigate = useNavigate()

  function navigateDash() {
    console.log('preparing to navigate')
    navigate('/landing-page')
  }

  const { loginWithRedirect, isAuthenticated } = useAuth0()
  if (!isAuthenticated) {
  }
  return (
    <div>
      {!isAuthenticated ? (
        <Button onClick={() => loginWithRedirect()}>Login</Button>
      ) : (
        <Button onClick={() => navigateDash()}>Proceed to Dashboard</Button>
      )}
    </div>
  )
}

export default Login
