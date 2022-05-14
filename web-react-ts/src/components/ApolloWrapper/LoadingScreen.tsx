import { Center, Container, Spinner } from '@chakra-ui/react'
import React from 'react'
// import LoadingOverlay from 'react-loading-overlay-ts'

const LoadingScreen = () => {
  return (
    <Center height="40vh" width="100vw">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
        label="Loading Data"
      />
    </Center>
  )
}

export default LoadingScreen
