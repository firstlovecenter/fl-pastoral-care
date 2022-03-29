import { Container } from '@chakra-ui/react'
import Login from './Login'
import CloudinaryImage from './CloudinaryImage'

const Dashboard = () => {
  console.log('Dashboard')

  return (
    <Container style={{ backgroundColor: 'black' }}>
      Dashboard
      <CloudinaryImage />
      <Login />
    </Container>
  )
}

export default Dashboard
