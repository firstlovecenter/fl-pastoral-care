import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  List,
  ListItem,
  Text,
  Avatar,
  InputGroup,
  InputLeftElement,
  Input,
  Center,
} from '@chakra-ui/react'

import { SearchIcon } from '@chakra-ui/icons'
import { transformImage } from '../../../utils/global-utils'
import { useNavigate } from 'react-router'
import { ListMemberInterface } from './member-list.types'
import { useContext } from 'react'
import { ChurchContext } from '../../../context/ChurchContext'

type MemberListPropType = {
  data: any
}

const MemberList = (props: MemberListPropType) => {
  const { clickCard } = useContext(ChurchContext)
  const navigate = useNavigate()
  const { data } = props
  const memberSize = data?.sheep.length + data?.deer.length + data?.goat.length

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '40px',
          paddingBottom: '10px',
          flexDirection: 'column',
        }}
      >
        <Center>
          <Text fontSize={'4xl'}>View Membership </Text>
        </Center>

        <InputGroup
          style={{
            width: '300px',
            alignSelf: 'center',
            paddingBottom: '20px',
          }}
        >
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            style={{ backgroundColor: '#333533' }}
            type="Text"
            placeholder="Search"
            color="white"
          />
        </InputGroup>

        <Text fontSize={'xl'} style={{ alignSelf: 'center', color: '#aeafae' }}>
          Total Members : {memberSize}
        </Text>
      </div>

      <Accordion defaultIndex={[0]} allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton
              style={{
                backgroundColor: '#343534',
                color: 'white',
              }}
            >
              <Box flex="1" textAlign="left">
                Sheep
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <Box paddingLeft="10px" paddingRight="10px">
            <AccordionPanel
              pb={4}
              style={{ height: '570px', overflowY: 'scroll' }}
            >
              <List spacing={3}>
                {data?.sheep.map(
                  (sheep: ListMemberInterface, index: number) => (
                    <ListItem
                      key={index}
                      onClick={() => {
                        clickCard(sheep)
                        navigate('/member-profile-page')
                      }}
                      style={{ fontSize: '20px', color: 'white' }}
                    >
                      <Avatar
                        loading="lazy"
                        size="sm"
                        name={sheep.firstName + ' ' + sheep.lastName}
                        style={{ marginRight: '10px' }}
                        src={sheep.pictureUrl}
                      />
                      {sheep.firstName} {sheep.lastName}
                    </ListItem>
                  )
                )}
              </List>
            </AccordionPanel>
          </Box>
        </AccordionItem>

        <AccordionItem style={{ borderStyle: 'none' }}>
          <h2>
            <AccordionButton
              style={{
                backgroundColor: '#343534',
                color: 'white',
              }}
            >
              <Box flex="1" textAlign="left">
                Deer
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <Box style={{ paddingLeft: '10px', paddingRight: '10px' }}>
            <AccordionPanel
              pb={4}
              style={{ height: '570px', overflowY: 'scroll' }}
            >
              <List spacing={3}>
                {data?.deer.map((deer: ListMemberInterface, index: number) => (
                  <ListItem
                    key={index}
                    onClick={() => {
                      clickCard(deer)
                      navigate('/member-profile-page')
                    }}
                    style={{ fontSize: '20px', color: 'white' }}
                  >
                    <Avatar
                      size="sm"
                      loading="lazy"
                      name={(deer.firstName, deer.lastName)}
                      style={{ marginRight: '10px' }}
                      src={transformImage(deer.pictureUrl)}
                    />
                    {deer.firstName} {deer.lastName}
                  </ListItem>
                ))}
              </List>
            </AccordionPanel>
          </Box>
        </AccordionItem>

        <AccordionItem style={{ borderStyle: 'none' }}>
          <h2>
            <AccordionButton
              style={{
                backgroundColor: '#343534',
                color: 'white',
              }}
            >
              <Box flex="1" textAlign="left">
                Goat
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <Box style={{ paddingLeft: '10px', paddingRight: '10px' }}>
            <AccordionPanel
              pb={4}
              style={{ height: '570px', overflowY: 'scroll' }}
            >
              <List spacing={3}>
                {data?.goat.map((goat: ListMemberInterface, index: number) => (
                  <ListItem
                    key={index}
                    onClick={() => {
                      clickCard(goat)
                      navigate('/member-profile-page')
                    }}
                    style={{ fontSize: '20px', color: 'white' }}
                  >
                    <Avatar
                      size="sm"
                      loading="lazy"
                      name={(goat.firstName, goat.lastName)}
                      style={{ marginRight: '10px' }}
                      src={transformImage(goat.pictureUrl)}
                    />
                    {goat.firstName} {goat.lastName}
                  </ListItem>
                ))}
              </List>
            </AccordionPanel>
          </Box>
        </AccordionItem>
      </Accordion>
    </>
  )
}

export default MemberList
