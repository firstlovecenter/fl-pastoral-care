import { useColorModeValue } from '@chakra-ui/react'

const useCustomColor = () => {
  const bg = useColorModeValue('#e6e9ef', '#2d2e3e')
  const brand = useColorModeValue('#188287', '#2ad5dc')

  return { bg, brand }
}

export default useCustomColor
