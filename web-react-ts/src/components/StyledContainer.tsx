import { chakra, Container } from '@chakra-ui/react'

const StyledContainer = chakra(Container, {
  baseStyle: {
    height: '100vh',
    backgroundColor: '#232423',
    justifyContent: 'center',
    paddingRight: '10px',
  },
})

export default StyledContainer
