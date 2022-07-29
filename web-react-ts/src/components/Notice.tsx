import { Box } from '@chakra-ui/react'
import useCustomColor from 'hooks/useCustomColor'
import React from 'react'

const Notice = ({ children }: { children: JSX.Element }) => {
  const { bg } = useCustomColor()

  return (
    <Box
      padding={10}
      marginTop="5"
      background={bg}
      rounded="lg"
      boxShadow="2xl"
      fontWeight="bold"
      fontSize="xl"
    >
      {children}
    </Box>
  )
}

export default Notice
