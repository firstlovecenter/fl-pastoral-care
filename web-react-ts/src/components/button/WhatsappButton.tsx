import { Button } from '@chakra-ui/react'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsappButton = ({ number }: { number: string }) => {
  return (
    <Button
      as="a"
      href={`https://wa.me/${number}`}
      colorScheme="whatsapp"
      alignSelf="center"
      rounded="full"
    >
      <FaWhatsapp size={25} />
    </Button>
  )
}

export default WhatsappButton
