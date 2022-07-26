import { useQuery } from '@apollo/client'
import { useContext } from 'react'
import ApolloWrapper from '../../../components/ApolloWrapper/ApolloWrapper'
import { ChurchContext } from '../../../context/ChurchContext'
import { GET_CONSTITUENCY_MEMBERS } from './memberList.gql'
import MemberList from './MemberList'

const ConstituencyMembers = () => {
  const { constituencyId } = useContext(ChurchContext)
  const apollo = useQuery(GET_CONSTITUENCY_MEMBERS, {
    variables: { id: constituencyId },
  })

  const constituency = apollo.data?.constituencies[0]

  return (
    <ApolloWrapper apolloResponse={apollo}>
      <MemberList church={constituency} />
    </ApolloWrapper>
  )
}

export default ConstituencyMembers
