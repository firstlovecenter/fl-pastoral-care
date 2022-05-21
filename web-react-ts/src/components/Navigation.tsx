import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router'

const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef(null)
  const navigate = useNavigate()

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Pastoral Care Menu</DrawerHeader>

          <DrawerBody>
            <Box
              bg="grey"
              p="3"
              borderRadius="lg"
              onClick={() => navigate('/')}
            >
              Home
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Text>Your face here</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
export default Navigation
