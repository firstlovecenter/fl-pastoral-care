import { chakra, Container } from '@chakra-ui/react'

const StyledContainer = chakra(Container, {
  baseStyle: {
    height: '100%',
    backgroundColor: '#232423',
    justifyContent: 'center',
    paddingBottom: '20px',
    paddingRight: '10px',
  },
})

export default StyledContainer
