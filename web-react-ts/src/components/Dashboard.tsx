import { Container } from '@chakra-ui/react'
import Login from './Login'
import CloudinaryImage from './CloudinaryImage'

const Dashboard = () => {
  return (
    <Container>
      Dashboard
      <CloudinaryImage />
      <Login />
    </Container>
  )
}

export default Dashboard
