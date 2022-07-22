import { useQuery } from '@apollo/client'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { Box, Container, Flex, Heading, Spacer, Text } from '@chakra-ui/react'
import ApolloWrapper from 'components/ApolloWrapper/ApolloWrapper'
import { ChurchContext } from 'context/ChurchContext'
import useCustomColor from 'hooks/useCustomColor'
import { parseDate } from 'jd-date-utils'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { Fellowship } from 'types/global-types'
import { DISPLAY_FELLOWSHIP_SERVICES } from './ticker/ticker.gql'

const FellowshipServicesList = () => {
  const { fellowshipId, clickCard } = useContext(ChurchContext)
  const { bg } = useCustomColor()
  const navigate = useNavigate()

  const apolloData = useQuery(DISPLAY_FELLOWSHIP_SERVICES, {
    variables: { id: fellowshipId },
  })

  const fellowship: Fellowship = apolloData.data?.fellowships[0]
  const services = fellowship?.services

  return (
    <ApolloWrapper apolloData={apolloData}>
      <Container marginTop={10}>
        <Heading marginBottom={10}>
          {`${fellowship?.name} ${fellowship?.__typename}`}
        </Heading>
        {services?.map((service) => (
          <Flex
            key={service.id}
            alignContent="center"
            borderRadius="md"
            boxShadow="md"
            background={bg}
            padding={5}
            marginBottom={5}
            onClick={() => {
              clickCard(service)

              if (service.markedAttendance) {
                navigate('/fellowship/attendance-report')
              } else {
                navigate('/fellowship/weekday-attendance')
              }
            }}
          >
            <Box>
              <Text fontWeight="semibold">
                {parseDate(service.serviceDate.date)}
              </Text>
              <Text
                fontSize="xl"
                fontWeight="bold"
              >{`Attendance: ${service.attendance}`}</Text>
            </Box>
            <Spacer />
            {service.markedAttendance && (
              <Box marginRight={5} marginTop={5} alignSelf="center">
                <CheckCircleIcon
                  fontSize={25}
                  color="whatsapp.500"
                  boxShadow="lg"
                />
              </Box>
            )}
          </Flex>
        ))}
      </Container>
    </ApolloWrapper>
  )
}

export default FellowshipServicesList
