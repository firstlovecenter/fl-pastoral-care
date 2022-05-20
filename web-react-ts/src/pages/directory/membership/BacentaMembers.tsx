import { useQuery } from '@apollo/client'
import { Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import ApolloWrapper from '../../../components/ApolloWrapper/ApolloWrapper'
import { ChurchContext } from '../../../context/ChurchContext'
import { GET_BACENTA_MEMBERS } from './member-list.gql'
import MemberList from './MemberList'

const BacentaMembers = () => {
  const { bacentaId } = useContext(ChurchContext)
  const { data, loading, error } = useQuery(GET_BACENTA_MEMBERS, {
    variables: { id: bacentaId },
  })

  const bacenta = apollo.data?.bacentas[0]
  console.log(bacenta)
  return (
    <ApolloWrapper apolloData={{ data, loading, error }}>
      <>
        <Text>BacentaMembers</Text>
        <MemberList data={bacenta} />
      </>
    </ApolloWrapper>
  )
}

export default BacentaMembers
