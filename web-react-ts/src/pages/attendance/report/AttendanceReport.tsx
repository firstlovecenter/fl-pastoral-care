import {
  Avatar,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'
import { ChurchContext } from 'context/ChurchContext'
import useCustomColor from 'hooks/useCustomColor'
import { getHumanReadableDate } from 'jd-date-utils'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { ServiceRecord, BussingRecord, Church } from 'types/global-types'
import { transformImage } from 'utils/global-utils'

const AttendanceReport = ({
  service,
  church,
}: {
  church: Church
  service: ServiceRecord | BussingRecord
}) => {
  const { clickCard } = useContext(ChurchContext)
  const { brand, bg } = useCustomColor()
  const navigate = useNavigate()

  return (
    <Container marginTop={10}>
      <Heading>Attendance Report</Heading>
      <Text
        color={brand}
        fontSize="xl"
        fontWeight="bold"
        marginBottom={8}
      >{`${church.name} ${church.__typename}`}</Text>
      <Text fontWeight="bold" marginBottom={4}>
        Summary for {`${getHumanReadableDate(service.serviceDate.date, true)}`}
      </Text>
      <Text fontSize="lg" marginBottom={4}>
        Absent: {service?.membersAbsent.length}
      </Text>
      <VStack align="stretch" width="full">
        {service?.membersAbsent.map((member) => (
          <Flex
            key={member.id}
            onClick={() => {
              clickCard(member)
              navigate('/member-details')
            }}
            background={bg}
            borderRadius={20}
            padding={5}
          >
            <Avatar
              loading="lazy"
              name={member?.fullName}
              marginRight="10px"
              src={transformImage(member?.pictureUrl)}
              size={'lg'}
            />
            <Text alignSelf="center" fontWeight="bold">
              {member.fullName}
            </Text>
          </Flex>
        ))}
      </VStack>

      <Text fontSize="lg" marginY={4}>
        Present: {service?.membersPresent.length}
      </Text>
      <VStack align="stretch" width="full">
        {service?.membersPresent.map((member) => (
          <Flex key={member.id} background={bg} borderRadius={20} padding={5}>
            <Avatar
              loading="lazy"
              name={member?.fullName}
              marginRight="10px"
              src={transformImage(member?.pictureUrl)}
              size={'lg'}
            />
            <Text alignSelf="center" fontWeight="bold">
              {member.fullName}
            </Text>
          </Flex>
        ))}
      </VStack>
      <Center>
        <Button
          marginTop={10}
          size="lg"
          colorScheme="teal"
          onClick={() => navigate(`/${church?.__typename}/dashboard`)}
        >
          Go To Dashboard
        </Button>
      </Center>
    </Container>
  )
}

export default AttendanceReport
