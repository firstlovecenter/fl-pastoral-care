import { useQuery } from '@apollo/client'
import ApolloWrapper from 'components/ApolloWrapper/ApolloWrapper'
import { ChurchContext } from 'context/ChurchContext'
import { GET_BACENTA_BUSSING_REPORT } from './report-queries.gql'
import { useContext } from 'react'
import AttendanceReport from './AttendanceReport'

const BacentaAttendanceReport = () => {
  const { bussingRecordId, bacentaId } = useContext(ChurchContext)

  const apollo = useQuery(GET_BACENTA_BUSSING_REPORT, {
    variables: { bussingRecordId, bacentaId },
  })

  const bacenta = apollo.data?.bacentas[0]
  const serviceRecord = apollo.data?.bussingRecords[0]

  return (
    <ApolloWrapper apolloResponse={apollo}>
      <AttendanceReport church={bacenta} service={serviceRecord} />
    </ApolloWrapper>
  )
}

export default BacentaAttendanceReport
