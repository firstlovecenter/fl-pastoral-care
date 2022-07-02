import { useMutation, useQuery } from '@apollo/client'
import ApolloWrapper from 'components/ApolloWrapper/ApolloWrapper'
import { ChurchContext } from 'context/ChurchContext'
import { GET_FELLOWSHIP_MEMBERS } from 'pages/directory/membership/member-list.gql'
import React, { useContext } from 'react'
import { RECORD_MEMBER_FELLOWSHIP_ATTENDANCE } from './attendance.gql'
import AttendanceTicker from './AttendanceTicker'

const FellowshipAttendanceTicker = () => {
  const { fellowshipId } = useContext(ChurchContext)

  const apollo = useQuery(GET_FELLOWSHIP_MEMBERS, {
    variables: { id: fellowshipId },
  })
  const [RecordMemberAttendance] = useMutation(
    RECORD_MEMBER_FELLOWSHIP_ATTENDANCE
  )

  const fellowship = apollo.data?.fellowships[0]

  return (
    <ApolloWrapper apolloData={apollo}>
      <AttendanceTicker
        church={fellowship}
        RecordMemberAttendance={RecordMemberAttendance}
      />
    </ApolloWrapper>
  )
}

export default FellowshipAttendanceTicker
