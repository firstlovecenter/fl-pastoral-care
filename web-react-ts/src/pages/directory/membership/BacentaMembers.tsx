import { useQuery } from '@apollo/client'
import { useContext } from 'react'
import ApolloWrapper from '../../../components/ApolloWrapper/ApolloWrapper'
import { ChurchContext } from '../../../context/ChurchContext'
import { GET_BACENTA_MEMBERS } from './member-list.gql'
import MemberList from './MemberList'

const BacentaMembers = () => {
  const { bacentaId } = useContext(ChurchContext)
  const apollo = useQuery(GET_BACENTA_MEMBERS, { variables: { id: bacentaId } })

  const bacenta = apollo.data?.bacentas[0]
  return (
    <ApolloWrapper apolloData={apollo}>
      <MemberList church={bacenta} />
    </ApolloWrapper>
  )
}

export default BacentaMembers
