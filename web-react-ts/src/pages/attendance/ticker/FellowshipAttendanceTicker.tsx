import { useMutation, useQuery } from '@apollo/client'
import ApolloWrapper from 'components/ApolloWrapper/ApolloWrapper'
import { ChurchContext } from 'context/ChurchContext'
import { GET_FELLOWSHIP_MEMBERS } from 'pages/directory/membership/memberList.gql'
import React, { useContext } from 'react'
import { RECORD_MEMBER_FELLOWSHIP_ATTENDANCE } from './ticker.gql'
import AttendanceTicker from './AttendanceTicker'

const FellowshipAttendanceTicker = () => {
  const { fellowshipId, serviceRecordId } = useContext(ChurchContext)

  const apollo = useQuery(GET_FELLOWSHIP_MEMBERS, {
    variables: { id: fellowshipId, serviceRecordId },
  })
  const [RecordMemberAttendance] = useMutation(
    RECORD_MEMBER_FELLOWSHIP_ATTENDANCE
  )

  const fellowship = apollo.data?.fellowships[0]
  const service = apollo.data?.serviceRecords[0]

  return (
    <ApolloWrapper apolloResponse={apollo}>
      <AttendanceTicker
        service={service}
        church={fellowship}
        RecordMemberAttendance={RecordMemberAttendance}
      />
    </ApolloWrapper>
  )
}

export default FellowshipAttendanceTicker
