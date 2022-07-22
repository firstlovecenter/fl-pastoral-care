import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  List,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Center,
} from '@chakra-ui/react'

import { SearchIcon } from '@chakra-ui/icons'
import { ListMemberInterface } from './member-list.types'
import MemberListItem from './MemberListItem'

type MemberListPropType = {
  church: any
}

const MemberList = (props: MemberListPropType) => {
  const { church } = props
  const memberSize =
    church?.sheep.length + church?.deer.length + church?.goat.length

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
          <Input type="Text" placeholder="Search" color="white" />
        </InputGroup>

        <Text fontSize={'xl'} style={{ alignSelf: 'center', color: '#aeafae' }}>
          Total Members : {memberSize}
        </Text>
      </div>

      <Accordion defaultIndex={[0]} allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Sheep: {church?.sheep.length}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <Box paddingLeft="10px" paddingRight="10px">
            <AccordionPanel pb={4} overflowY="scroll">
              <List spacing={3}>
                {church?.sheep.map(
                  (sheep: ListMemberInterface, index: number) => (
                    <MemberListItem member={sheep} key={index} />
                  )
                )}
              </List>
            </AccordionPanel>
          </Box>
        </AccordionItem>

        <AccordionItem style={{ borderStyle: 'none' }}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Deer: {church?.deer.length}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <Box style={{ paddingLeft: '10px', paddingRight: '10px' }}>
            <AccordionPanel pb={4} overflowY="scroll">
              <List spacing={3}>
                {church?.deer.map(
                  (deer: ListMemberInterface, index: number) => (
                    <MemberListItem key={index} member={deer} />
                  )
                )}
              </List>
            </AccordionPanel>
          </Box>
        </AccordionItem>

        <AccordionItem style={{ borderStyle: 'none' }}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Goat: {church?.goat.length}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <Box style={{ paddingLeft: '10px', paddingRight: '10px' }}>
            <AccordionPanel pb={4} overflowY="scroll">
              <List spacing={3}>
                {church?.goat.map(
                  (goat: ListMemberInterface, index: number) => (
                    <MemberListItem key={index} member={goat} />
                  )
                )}
              </List>
            </AccordionPanel>
          </Box>
        </AccordionItem>
      </Accordion>
    </>
  )
}

export default MemberList
