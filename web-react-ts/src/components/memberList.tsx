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
} from '@chakra-ui/react'
import LoadingOverlay from 'react-loading-overlay'

import { SearchIcon } from '@chakra-ui/icons'

import { GET_MEMBERS } from '../queries/fetch-members'
import { useQuery } from '@apollo/client'
import { member } from '../queries/member-types'
import { transformImage } from '../global-utils'
// import CloudinaryImage from './CloudinaryImage'

const MemberList = () => {
  document.body.style.backgroundColor = '#232423'

  const { loading, error, data } = useQuery(GET_MEMBERS)
  if (loading)
    return (
      <LoadingOverlay
        active={true}
        spinner
        text="Retrieving list"
      ></LoadingOverlay>
    )

  const memberSize =
    data.members[0].sheep.length +
    data.members[0].deer.length +
    data.members[0].goat.length

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
        <Text
          fontSize={'4xl'}
          style={{ color: 'white', textAlign: 'center', padding: '10px' }}
        >
          {' '}
          View Membership
        </Text>
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
          {' '}
          Total Members : {memberSize}
        </Text>
      </div>

      <Accordion
        style={{ backgroundColor: '#232423' }}
        defaultIndex={[0]}
        allowToggle
      >
        <AccordionItem style={{ borderStyle: 'none' }}>
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
          <Box style={{ paddingLeft: '10px', paddingRight: '10px' }}>
            <AccordionPanel
              pb={4}
              style={{ height: '570px', overflowY: 'scroll' }}
            >
              <List spacing={3}>
                {data.members[0].sheep.map((bacenta: member) => (
                  <ListItem style={{ fontSize: '20px', color: 'white' }}>
                    <Avatar
                      loading="lazy"
                      size="sm"
                      name={bacenta.firstName + ' ' + bacenta.lastName}
                      style={{ marginRight: '10px' }}
                      src={transformImage(bacenta.pictureUrl)}
                    />
                    {/* <CloudinaryImage src={bacenta.pictureUrl} /> */}
                    {bacenta.firstName} {bacenta.lastName}
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
                {data.members[0].deer.map((bacenta: member) => (
                  <ListItem style={{ fontSize: '20px', color: 'white' }}>
                    <Avatar
                      size="sm"
                      loading="lazy"
                      name={(bacenta.firstName, bacenta.lastName)}
                      style={{ marginRight: '10px' }}
                      src={transformImage(bacenta.pictureUrl)}
                    />
                    {bacenta.firstName} {bacenta.lastName}
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
                {data.members[0].goat.map((bacenta: member) => (
                  <ListItem style={{ fontSize: '20px', color: 'white' }}>
                    <Avatar
                      size="sm"
                      loading="lazy"
                      name={(bacenta.firstName, bacenta.lastName)}
                      style={{ marginRight: '10px' }}
                      src={transformImage(bacenta.pictureUrl)}
                    />
                    {bacenta.firstName} {bacenta.lastName}
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
