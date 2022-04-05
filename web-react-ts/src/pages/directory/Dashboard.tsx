import { Container } from '@chakra-ui/react'
import Login from './Login'

const Dashboard = () => {
  console.log('Dashboard')

  return (
    <Container style={{ backgroundColor: 'black' }}>
      Dashboard
      <Login />
    </Container>
  )
}

export default Dashboard
