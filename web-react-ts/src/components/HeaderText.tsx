import whitelogo from '../assets/img/flclogo.png'
import { Image, Text, Container } from '@chakra-ui/react'
import { useAuth0 } from '@auth0/auth0-react'

const HeaderText = () => {
  const { user } = useAuth0()

  return (
    <Container marginTop="5" marginBottom={10} centerContent>
      <Image style={{ height: '50px' }} src={whitelogo} alt="First Love Logo" />

      <Text fontSize="xl" fontWeight={'semibold'}>
        <span style={{ color: '#a53c35' }}>Welcome </span>
        {user?.given_name}!
      </Text>

      <Text color="gray"> Which profile would you like to access?</Text>
    </Container>
  )
}

export default HeaderText
