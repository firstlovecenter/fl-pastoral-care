import { useQuery } from '@apollo/client'
import { useContext } from 'react'
import ApolloWrapper from '../../../components/ApolloWrapper/ApolloWrapper'
import { ChurchContext } from '../../../context/ChurchContext'
import { GET_COUNCIL_MEMBERS } from './member-list.gql'
import MemberList from './MemberList'

const CouncilMembers = () => {
  const { councilId } = useContext(ChurchContext)
  const apollo = useQuery(GET_COUNCIL_MEMBERS, {
    variables: { id: councilId },
  })

  const council = apollo.data?.councils[0]

  return (
    <ApolloWrapper apolloData={apollo}>
      <MemberList church={council} />
    </ApolloWrapper>
  )
}

export default CouncilMembers
