import { useQuery } from '@apollo/client'
import ApolloWrapper from 'components/ApolloWrapper/ApolloWrapper'
import { ChurchContext } from 'context/ChurchContext'
import { GET_FELLOWSHIP_MEMBERS } from 'pages/directory/membership/member-list.gql'
import { useContext } from 'react'
import AttendanceReport from './AttendanceReport'

const FellowshipAttendanceReport = () => {
  const { fellowshipId } = useContext(ChurchContext)

  const apollo = useQuery(GET_FELLOWSHIP_MEMBERS, {
    variables: { id: fellowshipId },
  })

  const fellowship = apollo.data?.fellowships[0]
  console.log(fellowship)
  return (
    <ApolloWrapper apolloData={apollo}>
      <AttendanceReport />
    </ApolloWrapper>
  )
}

export default FellowshipAttendanceReport
