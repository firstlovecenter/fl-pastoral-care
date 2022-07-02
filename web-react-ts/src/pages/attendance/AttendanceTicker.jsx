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
import { useNavigate } from 'react-router'
// import { ListMemberInterface } from 'pages/directory/membership/member-list.types'

const AttendanceTicker = ({ church, RecordMemberAttendance }) => {
  const date = new Date()
  const navigate = useNavigate()

  const initialValues = {
    sheep: [],
    deer: [],
    goat: [],
  }

  const onSubmit = async (values) => {
    const combinedMembership = [...sheep, ...deer, ...goat].map(
      (member) => member.value
    )
    const combinedPresent = [...values.sheep, ...values.deer, ...values.goat]
    const combinedAbsent = combinedMembership.filter(
      (member) => !combinedPresent.includes(member)
    )

    await RecordMemberAttendance({
      variables: {
        churchId: church.id,
        presentMembers: combinedPresent,
        absentMembers: combinedAbsent,
      },
    })

    navigate('/')
  }

  const sheep =
    church?.sheep.map((sheep) => ({
      key: sheep.firstName + ' ' + sheep.lastName,
      value: sheep.id,
    })) ?? []

  const goat =
    church?.goat.map((goat) => ({
      key: goat.firstName + ' ' + goat.lastName,
      value: goat.id,
    })) ?? []

  const deer =
    church?.deer.map((deer) => ({
      key: deer.firstName + ' ' + deer.lastName,
      value: deer.id,
    })) ?? []

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validateOnMount>
      <Form>
        <Container centerContent>
          <Heading>Sunday Attendance</Heading>

          <Text>{getHumanReadableDate(date.toString())}</Text>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
            <Input placeholder="Search" />
          </InputGroup>

          <VStack marginTop={10} align="stretch" w={'full'}>
            {church?.sheep.length && <Heading>Sheep</Heading>}
            <CheckboxGroup name="sheep" options={sheep} />

            {church?.goat.length && <Heading>Goat</Heading>}
            <CheckboxGroup name="goat" options={goat} />

            {church?.deer.length && <Heading>Deer</Heading>}
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
  )
}

export default AttendanceTicker
