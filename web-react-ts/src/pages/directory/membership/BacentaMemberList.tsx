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

import { SearchIcon } from '@chakra-ui/icons'
import { GET_MEMBERS } from './member-list.gql'
import { useQuery } from '@apollo/client'
import { transformImage } from '../../../utils/global-utils'
import ApolloWrapper from '../../../components/ApolloWrapper/ApolloWrapper'
import { useNavigate } from 'react-router'
import { ListMemberInterface } from './member-list.types'
import { useContext } from 'react'
import { ChurchContext } from '../../../context/ChurchContext'

const BacentaMemberList = () => {
  const { clickCard, bacentaId } = useContext(ChurchContext)
  const { data, loading, error } = useQuery(GET_BACENTA_MEMBERS, {
    variables: bacentaId,
  })
  const navigate = useNavigate()

  const memberSize =
    data?.members[0].sheep.length +
    data?.members[0].deer.length +
    data?.members[1].goat.length

  return (
    <ApolloWrapper data={data} loading={loading} error={error}>
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

          <Text
            fontSize={'xl'}
            style={{ alignSelf: 'center', color: '#aeafae' }}
          >
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
                  {data?.members[0].sheep.map(
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
                  {data?.members[0].deer.map(
                    (deer: ListMemberInterface, index: number) => (
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
                  {data?.members[0].goat.map(
                    (goat: ListMemberInterface, index: number) => (
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
                    )
                  )}
                </List>
              </AccordionPanel>
            </Box>
          </AccordionItem>
        </Accordion>
      </>
    </ApolloWrapper>
  )
}

export default BacentaMemberList
