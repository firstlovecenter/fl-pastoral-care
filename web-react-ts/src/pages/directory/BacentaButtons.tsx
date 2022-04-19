import React from 'react'
import { Avatar, Text } from '@chakra-ui/react'
import PageNavButton from '../../components/PageNavButton'
import StyledContainer from '../../components/StyledContainer'
import { useLocation } from 'react-router-dom'
import {
  MdGroups,
  MdDirectionsRun,
  MdMenuBook,
  MdBatteryAlert,
  MdCall,
} from 'react-icons/md'

const BacentaButtons = () => {
  const { state }: any = useLocation()

  return (
    <StyledContainer>
      <header style={{ paddingTop: '50px' }}>
        <section
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            marginLeft: '40px',
          }}
        >
          <span style={{ color: 'white', marginTop: '30px' }}>
            <Text fontSize={'lg'}>
              {state.data.members[0].firstName} {state.data.members[0].lastName}
            </Text>
            <Text
              style={{ color: 'grey', textAlign: 'center' }}
              fontSize={'sm'}
            >
              Bacenta Leader
            </Text>
          </span>
          <Avatar
            src="https://bit.ly/sage-adebayo"
            loading="lazy"
            size="xl"
            style={{ marginRight: '10px' }}
          />
        </section>

        <section style={{ marginTop: '30px', marginBottom: '40px' }}>
          <Text fontSize="2xl" style={{ color: 'white', textAlign: 'center' }}>
            {state.data.members[0].leadsBacenta[0].name} Bacenta
          </Text>
          <Text fontSize="xs" style={{ color: 'grey', textAlign: 'center' }}>
            SouthEastern Constituency
          </Text>
        </section>
      </header>

      <PageNavButton icon={MdGroups} label="Sunday Attendance" />

      <PageNavButton icon={MdGroups} label="Fellowship Attendance" />
      <PageNavButton
        icon={MdDirectionsRun}
        label="First Timers & New Converts"
      />
      <PageNavButton icon={MdGroups} label="Membership List" />

      <Text fontSize="md" color="grey" textAlign="center" marginTop="15px">
        Outstanding Work
      </Text>

      <PageNavButton icon={MdDirectionsRun} label="Missing Persons Call List" />
      <PageNavButton icon={MdMenuBook} label="Visitations" />
      <PageNavButton icon={MdBatteryAlert} label="Prayer" />
      <PageNavButton icon={MdCall} label="Telepastoring Calls" />
    </StyledContainer>
  )
}

export default BacentaButtons
