import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router'
import useCustomColor from '../hooks/useCustomColor'
import ColorModeSwitcher from './ColorModeSwitcher'

const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef(null)
  const navigate = useNavigate()
  const { bg } = useCustomColor()

  const menuItems = [
    {
      name: 'Home',
      link: '/',
    },
  ]

  return (
    <>
      <IconButton
        colorScheme="gray"
        boxShadow="lg"
        aria-label="Side Nav Toggle"
        size="lg"
        position="fixed"
        bottom={4}
        right={6}
        zIndex={2}
        isRound
        ref={btnRef}
        onClick={onOpen}
        icon={<HamburgerIcon />}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Pastoral Care Menu</DrawerHeader>

          <DrawerBody>
            {menuItems.map((item) => (
              <Button
                key={item.name}
                bg={bg}
                paddingY={8}
                marginY={2}
                width="100%"
                onClick={() => {
                  navigate(item.link)
                  onClose()
                }}
              >
                {item.name}
              </Button>
            ))}
          </DrawerBody>

          <DrawerFooter>
            <Text>Your face here</Text>
            <ColorModeSwitcher justifySelf="flex-end" />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
export default Navigation
