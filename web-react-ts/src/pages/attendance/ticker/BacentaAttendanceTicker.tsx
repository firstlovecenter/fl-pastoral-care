import { useMutation, useQuery } from '@apollo/client'
import ApolloWrapper from 'components/ApolloWrapper/ApolloWrapper'
import { ChurchContext } from 'context/ChurchContext'
import { GET_BACENTA_MEMBERS } from 'pages/directory/membership/memberList.gql'
import React, { useContext } from 'react'
import { RECORD_MEMBER_BACENTA_ATTENDANCE } from './ticker.gql'
import AttendanceTicker from './AttendanceTicker'

const BacentaAttendanceTicker = () => {
  const { bacentaId, bussingRecordId } = useContext(ChurchContext)

  const apollo = useQuery(GET_BACENTA_MEMBERS, {
    variables: { id: bacentaId, bussingRecordId },
  })
  const [RecordMemberAttendance] = useMutation(RECORD_MEMBER_BACENTA_ATTENDANCE)

  const bacenta = apollo.data?.bacentas[0]
  const bussing = apollo.data?.bussingRecords[0]

  return (
    <ApolloWrapper apolloData={apollo}>
      <AttendanceTicker
        church={bacenta}
        service={bussing}
        RecordMemberAttendance={RecordMemberAttendance}
      />
    </ApolloWrapper>
  )
}

export default BacentaAttendanceTicker
