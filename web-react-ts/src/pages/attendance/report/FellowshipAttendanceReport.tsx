import { useQuery } from '@apollo/client'
import ApolloWrapper from 'components/ApolloWrapper/ApolloWrapper'
import { ChurchContext } from 'context/ChurchContext'
import { GET_FELLOWSHIP_SERVICE_REPORT } from './report-queries.gql'
import { useContext } from 'react'
import AttendanceReport from './AttendanceReport'

const FellowshipAttendanceReport = () => {
  const { serviceRecordId, fellowshipId } = useContext(ChurchContext)

  const apollo = useQuery(GET_FELLOWSHIP_SERVICE_REPORT, {
    variables: { serviceRecordId, fellowshipId },
  })

  const fellowship = apollo.data?.fellowships[0]
  const serviceRecord = apollo.data?.serviceRecords[0]

  return (
    <ApolloWrapper apolloData={apollo}>
      <AttendanceReport church={fellowship} service={serviceRecord} />
    </ApolloWrapper>
  )
}

export default FellowshipAttendanceReport
