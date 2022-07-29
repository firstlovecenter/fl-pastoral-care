import { Button, Center, Container, Heading, Text } from '@chakra-ui/react'
import { FaHome } from 'react-icons/fa'
import { useNavigate } from 'react-router'

const PageNotFound = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Center height="100vh">
        <Text>
          <Heading>Error: 404 😔</Heading>
          <Text fontFamily="mono" fontSize="2xl">
            Sorry! The page you are looking for does not exist. It may be under
            maintenance, or there may be some other problem.
          </Text>
          <Button
            leftIcon={<FaHome />}
            size="lg"
            marginTop="10"
            colorScheme="twitter"
            onClick={() => navigate('/')}
          >
            Take Me Home
          </Button>
        </Text>
      </Center>
    </Container>
  )
}

export default PageNotFound
