import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()

  let navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/profile-choose-page')
    }
  }, [isAuthenticated, navigate])

  return (
    <div>
      <Button onClick={() => loginWithRedirect()}>Login</Button>
    </div>
  )
}

export default Login
