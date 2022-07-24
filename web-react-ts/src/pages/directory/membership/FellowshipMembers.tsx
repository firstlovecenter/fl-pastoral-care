import { useQuery } from '@apollo/client'
import { useContext } from 'react'
import ApolloWrapper from '../../../components/ApolloWrapper/ApolloWrapper'
import { ChurchContext } from '../../../context/ChurchContext'
import { GET_FELLOWSHIP_MEMBERS } from './memberList.gql'
import MemberList from './MemberList'

const FellowshipMembers = () => {
  const { fellowshipId } = useContext(ChurchContext)
  const apollo = useQuery(GET_FELLOWSHIP_MEMBERS, {
    variables: { id: fellowshipId },
  })

  const fellowship = apollo.data?.fellowships[0]

  return (
    <ApolloWrapper apolloData={apollo}>
      <MemberList church={fellowship} />
    </ApolloWrapper>
  )
}

export default FellowshipMembers
