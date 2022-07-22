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
import ImageUpload from 'components/formik/ImageUpload'
import CheckboxGroup from 'components/formik/MemberCheckboxGroup'
import { Form, Formik, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import { getHumanReadableDate } from 'jd-date-utils'
import { useNavigate } from 'react-router'
import { ServiceRecord } from 'types/global-types'
import { ChurchForAttendance } from '../attendance-types'

type FormOptions = {
  membersPicture: string
  sheep: string[]
  deer: string[]
  goat: string[]
}

const AttendanceTicker = ({
  church,
  service,
  RecordMemberAttendance,
}: {
  church: ChurchForAttendance
  service: ServiceRecord
  RecordMemberAttendance: MutationFunction
}) => {
  const navigate = useNavigate()
  const weekday = service?.__typename === 'ServiceRecord'

  const initialValues: FormOptions = {
    membersPicture: '',
    sheep: [],
    deer: [],
    goat: [],
  }

  const validationSchema = Yup.object({
    membersPicture: Yup.string().required(`Please upload a picture`),
  })

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
        recordId: service.id,
        membersPicture: values.membersPicture,
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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnMount
    >
      {(formik) => (
        <Form>
          <Container marginTop={10} centerContent>
            <Heading>{`${
              weekday ? 'Weekday Serivce' : 'Sunday'
            } Attendance`}</Heading>

            <Text>
              {getHumanReadableDate(service.serviceDate.date.toString())}
            </Text>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon />}
              />
              <Input placeholder="Search" />
            </InputGroup>
            <VStack marginTop={10} align="stretch" w={'full'}>
              <ImageUpload
                name="membersPicture"
                uploadPreset="developer-tests"
                initialValue={initialValues.membersPicture}
                setFieldValue={formik.setFieldValue}
                error={formik.errors.membersPicture}
                placeholder="Upload A Picture of Your Members"
              />

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
