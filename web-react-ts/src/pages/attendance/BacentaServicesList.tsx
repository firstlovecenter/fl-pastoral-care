import { useQuery } from '@apollo/client'
import { Box, Container, Heading, Text } from '@chakra-ui/react'
import ApolloWrapper from 'components/ApolloWrapper/ApolloWrapper'
import { ChurchContext } from 'context/ChurchContext'
import useCustomColor from 'hooks/useCustomColor'
import { parseDate } from 'jd-date-utils'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { Bacenta } from 'types/global-types'
import { DISPLAY_BACENTA_SERVICES } from './ticker/ticker.gql'

const BacentaServicesList = () => {
  const { bacentaId, clickCard } = useContext(ChurchContext)
  const { bg } = useCustomColor()
  const navigate = useNavigate()

  const apolloData = useQuery(DISPLAY_BACENTA_SERVICES, {
    variables: { id: bacentaId },
  })

  const bacenta: Bacenta = apolloData.data?.bacentas[0]
  const services = bacenta?.services

  return (
    <ApolloWrapper apolloData={apolloData}>
      <Container marginTop={10}>
        <Heading marginBottom={10}>
          {`${bacenta?.name} ${bacenta?.__typename}`}
        </Heading>
        {services?.map((service) => (
          <Box
            key={service.id}
            marginBottom={5}
            onClick={() => {
              clickCard(service)

              if (service.markedAttendance) {
                navigate('/bacenta/attendance-report')
              } else {
                navigate('/bacenta/weekday-attendance')
              }
            }}
            borderRadius="md"
            background={bg}
            padding={5}
          >
            <Text fontWeight="bold">{parseDate(service.serviceDate.date)}</Text>
            <Text
              fontSize="2xl"
              fontWeight="bold"
            >{`Attendance: ${service.attendance}`}</Text>
          </Box>
        ))}
      </Container>
    </ApolloWrapper>
  )
}

export default BacentaServicesList
