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
import { Church } from 'types/global-types'

type HomePageProps = {
  church: Church
  higherChurch: Church
}

const HomePage = ({ church, higherChurch }: HomePageProps) => {
  const { currentUser } = useContext(UserContext)
  const churchLevel = church.__typename.toLowerCase()

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
              {church.__typename} Leader
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
            {church.name} {church.__typename}
          </Text>
          <Text fontSize="xs">
            {higherChurch.name} {higherChurch.__typename}
          </Text>
        </Container>
      </header>

      <VStack spacing={3}>
        {church.__typename === 'Bacenta' && (
          <PageNavButton
            icon={MdGroups}
            label="Bacenta Attendance"
            to={`/${churchLevel}/services-list`}
          />
        )}
        {church.__typename === 'Fellowship' && (
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
