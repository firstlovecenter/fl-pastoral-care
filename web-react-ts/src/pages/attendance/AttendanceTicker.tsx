import { MutationFunction } from '@apollo/client'
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
import { Form, Formik, FormikHelpers } from 'formik'
import { getHumanReadableDate } from 'jd-date-utils'
import { useNavigate } from 'react-router'
import { ChurchForAttendance } from './attendance-types'

type FormOptions = {
  sheep: string[]
  deer: string[]
  goat: string[]
}

const AttendanceTicker = ({
  church,
  RecordMemberAttendance,
}: {
  church: ChurchForAttendance
  RecordMemberAttendance: MutationFunction
}) => {
  const date = new Date()
  const navigate = useNavigate()

  const initialValues: FormOptions = {
    sheep: [],
    deer: [],
    goat: [],
  }

  const onSubmit = async (
    values: FormOptions,
    onSubmitProps: FormikHelpers<FormOptions>
  ) => {
    onSubmitProps.setSubmitting(true)
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

    onSubmitProps.setSubmitting(false)
    navigate(`/${church.__typename.toLowerCase()}/attendance-report`)
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
      {(formik) => (
        <Form>
          <Container centerContent>
            <Heading>Sunday Attendance</Heading>

            <Text>{getHumanReadableDate(date.toString())}</Text>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon />}
              />
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
              isLoading={formik.isSubmitting}
              loadingText="Submitting"
              rounded={0}
              type="submit"
            >
              Submit
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  )
}

export default AttendanceTicker
