import { Button } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'
import React from 'react'

const PhoneButton = ({ number }: { number: string }) => {
  return (
    <Button
      as="a"
      href={`tel:${number}`}
      colorScheme="twitter"
      alignSelf="center"
      rounded="full"
      marginRight="5px"
    >
      <PhoneIcon />
    </Button>
  )
}

export default PhoneButton
