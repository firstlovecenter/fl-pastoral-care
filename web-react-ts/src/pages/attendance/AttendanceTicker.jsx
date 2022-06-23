import { useQuery } from '@apollo/client'
import { SearchIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Button,
  Checkbox,
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react'
import { getHumanReadableDate } from 'jd-date-utils'
import { useContext } from 'react'
import ApolloWrapper from '../../components/ApolloWrapper/ApolloWrapper'
import { ChurchContext } from '../../context/ChurchContext'
import { GET_BACENTA_MEMBERS } from '../directory/membership/member-list.gql'

const SundayAttendance = () => {
  const date = new Date()
  const { bacentaId } = useContext(ChurchContext)

  const apollo = useQuery(GET_BACENTA_MEMBERS, {
    variables: { id: bacentaId },
  })

  const bacenta = apollo.data?.bacentas[0]

  return (
    <ApolloWrapper apolloData={apollo}>
      <Container centerContent>
        <Heading>Sunday Attendance</Heading>

        <Text>{getHumanReadableDate(date)}</Text>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
          <Input placeholder="Search" />
        </InputGroup>

        <VStack
          marginTop={10}
          divider={<StackDivider borderColor="gray.200" />}
          spacing={3}
          align="stretch"
          w={'full'}
        >
          {bacenta?.sheep.length && <Heading>Sheep</Heading>}
          {bacenta?.sheep.map((sheep, i) => (
            <Flex key={i}>
              <Avatar size={'xs'} marginRight="10px" /> {sheep.fullName}
              <Spacer />
              <Checkbox alignSelf={'end'} size="lg" />
            </Flex>
          ))}
          {bacenta?.goat.length && <Heading>Goat</Heading>}
          {bacenta?.goat.map((sheep, i) => (
            <Flex key={i}>
              <Avatar size={'xs'} marginRight="10px" /> {sheep.fullName}
              <Spacer />
              <Checkbox alignSelf={'end'} size="lg" />
            </Flex>
          ))}
          {bacenta?.deer.length && <Heading>Deer</Heading>}
          {bacenta?.deer.map((sheep, i) => (
            <Flex key={i}>
              <Avatar size={'xs'} marginRight="10px" /> {sheep.fullName}
              <Spacer />
              <Checkbox alignSelf={'end'} size="lg" />
            </Flex>
          ))}
        </VStack>
      </Container>
      <Flex width="100%">
        <Button
          size={'lg'}
          height={94}
          width="100%"
          position="fixed"
          bottom={0}
          zIndex={3}
          colorScheme="green"
          rounded={0}
        >
          Submit
        </Button>
      </Flex>
    </ApolloWrapper>
  )
}

export default SundayAttendance
