import { useQuery } from '@apollo/client'
import { SearchIcon } from '@chakra-ui/icons'
import {
  Button,
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
} from '@chakra-ui/react'
import CheckboxGroup from 'components/formik/MemberCheckboxGroup'
import { Form, Formik } from 'formik'
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

  const initialValues = {
    attendance: [],
    sheep: [],
  }

  const onSubmit = (values, onSubmitProps) => {
    console.log(values)
  }

  const sheep = bacenta?.sheep.map((sheep) => ({
    key: sheep.firstName + ' ' + sheep.lastName,
    value: sheep.id,
  }))

  const goat = bacenta?.goat.map((goat) => ({
    key: goat.firstName + ' ' + goat.lastName,
    value: goat.id,
  }))
  const deer = bacenta?.deer.map((deer) => ({
    key: deer.firstName + ' ' + deer.lastName,
    value: deer.id,
  }))

  return (
    <ApolloWrapper apolloData={apollo}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validateOnMount>
        <Form>
          <Container centerContent>
            <Heading>Sunday Attendance</Heading>

            <Text>{getHumanReadableDate(date)}</Text>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon />}
              />
              <Input placeholder="Search" />
            </InputGroup>

            <VStack marginTop={10} align="stretch" w={'full'}>
              {bacenta?.sheep.length && <Heading>Sheep</Heading>}
              <CheckboxGroup name="sheep" options={sheep} />

              {bacenta?.goat.length && <Heading>Goat</Heading>}
              <CheckboxGroup name="goat" options={goat} />

              {bacenta?.deer.length && <Heading>Deer</Heading>}
              <CheckboxGroup name="deer" options={deer} />
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
              type="submit"
            >
              Submit
            </Button>
          </Flex>
        </Form>
      </Formik>
    </ApolloWrapper>
  )
}

export default SundayAttendance
