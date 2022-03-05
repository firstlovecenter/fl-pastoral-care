import { FormInput } from '../Atoms/FormInput'
import { FormButton } from '../Atoms/FormButton'
import { Box, Image, Text } from '@chakra-ui/react'
import whitelogo from '../assets/img/flclogo.png'

export const LoginForm = () => (
  <Box style={{ backgroundColor: '#b42c2c' }} p={8}>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        height: '100vh',
        minHeight: '100vh',
        paddingTop: '80px',
      }}
    >
      <Box style={{ height: '250px', paddingLeft: '15px' }} boxSize="xs">
        <Image src={whitelogo} alt="First Love Logo" sizes="sm" />
      </Box>
      <FormInput description="Username" placeholder="Username" type="text" />
      <FormInput
        description="Password"
        placeholder="Password"
        type="password"
      />
      <FormButton color="#232423" title="Login" size="lg" />
      <Text style={{ color: 'white' }}>Forgotten Password?</Text>
    </div>
  </Box>
)
