import whitelogo from '../components/assets/img/flclogo.png'
import { Image, Box, Text } from '@chakra-ui/react'
import { useAuth0 } from '@auth0/auth0-react'

const HeaderText = () => {
  const { user } = useAuth0()

  return (
    <>
      <Box
        style={{
          display: 'flex',
          color: 'white',
          flexDirection: 'column',
          padding: '50px',
        }}
      >
        <div style={{ alignSelf: 'center' }}>
          <Image
            style={{ height: '50px' }}
            src={whitelogo}
            alt="First Love Logo"
          />
        </div>

        <div style={{ alignSelf: 'center' }}>
          <Text fontSize="28px" fontWeight={'semibold'}>
            {' '}
            <span style={{ color: '#a53c35' }}>Welcome </span>
            {user?.name}!
          </Text>
        </div>

        <div style={{ alignSelf: 'center' }}>
          <Text> Which profile would you like to access?</Text>
        </div>
      </Box>
    </>
  )
}

export default HeaderText
