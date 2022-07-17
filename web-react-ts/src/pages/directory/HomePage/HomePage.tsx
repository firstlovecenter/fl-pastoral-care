import React, { useContext } from 'react'
import { Avatar, Container, Text, VStack } from '@chakra-ui/react'
import PageNavButton from '../../../components/PageNavButton'
import {
  MdGroups,
  MdDirectionsRun,
  MdMenuBook,
  MdBatteryAlert,
  MdCall,
} from 'react-icons/md'

import { UserContext } from '../../../context/UserContext'
import { ChurchContext } from '../../../context/ChurchContext'

const HomePage = () => {
  const { currentUser } = useContext(UserContext)
  const { church } = useContext(ChurchContext)
  const churchLevel = church.level.toLowerCase()

  return (
    <Container>
      <header style={{ paddingTop: '50px' }}>
        <section
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            marginLeft: '40px',
          }}
        >
          <span style={{ marginTop: '30px' }}>
            <Text fontSize={'lg'}>
              {currentUser?.firstName} {currentUser?.lastName}
            </Text>
            <Text
              color={''}
              style={{ color: 'grey', textAlign: 'center' }}
              fontSize={'sm'}
            >
              {church.level} Leader
            </Text>
          </span>
          <Avatar
            src={currentUser?.pictureUrl}
            loading="lazy"
            size="xl"
            marginRight="10px"
          />
        </section>

        <Container marginTop="30px" marginBottom="40px" centerContent>
          <Text fontSize="2xl">
            {church.name} {church.level}
          </Text>
          <Text fontSize="xs">SouthEastern Constituency</Text>
        </Container>
      </header>

      <VStack spacing={3}>
        {church.level === 'Bacenta' && (
          <PageNavButton
            icon={MdGroups}
            label="Sunday Attendance"
            to={`/${churchLevel}/sunday-attendance`}
          />
        )}
        {church.level === 'Fellowship' && (
          <PageNavButton
            icon={MdGroups}
            label="Fellowship Attendance"
            to={`/${churchLevel}/services-list`}
          />
        )}
        <PageNavButton
          icon={MdDirectionsRun}
          label="First Timers & New Converts"
          to={`/${churchLevel}/first-timers`}
        />
        <PageNavButton
          icon={MdGroups}
          label="Membership List"
          to={`/${churchLevel}/member-list`}
        />
      </VStack>

      <Text fontSize="md" color="grey" textAlign="center" marginY="15px">
        Outstanding Work
      </Text>

      <VStack spacing={3}>
        <PageNavButton
          icon={MdDirectionsRun}
          label="Missing Persons Call List"
          to={`/${churchLevel}/missing-persons`}
        />
        <PageNavButton
          icon={MdMenuBook}
          label="Visitations"
          to={`/${churchLevel}/outstanding-visitations`}
        />
        <PageNavButton
          icon={MdBatteryAlert}
          label="Prayer"
          to={`/${churchLevel}/outstanding-prayer`}
        />
        <PageNavButton
          icon={MdCall}
          label="Telepastoring Calls"
          to={`/${churchLevel}/outstanding-telepastoring`}
        />
      </VStack>
    </Container>
  )
}

export default HomePage
