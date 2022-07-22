import {
  Button,
  Center,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'
import MemberCard from 'components/MemberCard'
import useCustomColor from 'hooks/useCustomColor'
import { getHumanReadableDate } from 'jd-date-utils'
import { useNavigate } from 'react-router'
import { ServiceRecord, BussingRecord, Church } from 'types/global-types'

const AttendanceReport = ({
  service,
  church,
}: {
  church: Church
  service: ServiceRecord | BussingRecord
}) => {
  const { brand } = useCustomColor()
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
          <MemberCard key={member.id} member={member} />
        ))}
      </VStack>

      <Text fontSize="lg" marginY={4}>
        Present: {service?.membersPresent.length}
      </Text>
      <VStack align="stretch" width="full">
        {service?.membersPresent.map((member) => (
          <MemberCard key={member.id} member={member} />
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
