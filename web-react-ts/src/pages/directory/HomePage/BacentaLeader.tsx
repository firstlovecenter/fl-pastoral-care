import { useQuery } from '@apollo/client'
import ApolloWrapper from 'components/ApolloWrapper/ApolloWrapper'
import { ChurchContext } from 'context/ChurchContext'
import React, { useContext } from 'react'
import HomePage from './HomePage'
import { DISPLAY_BACENTA_HOMEPAGE } from './Queries'

const BacentaLeader = () => {
  const { bacentaId } = useContext(ChurchContext)
  const apolloResponse = useQuery(DISPLAY_BACENTA_HOMEPAGE, {
    variables: {
      id: bacentaId,
    },
  })

  const bacenta = apolloResponse.data?.bacentas[0]
  const constituency = bacenta?.constituency

  return (
    <ApolloWrapper apolloResponse={apolloResponse}>
      <HomePage church={bacenta} higherChurch={constituency} />
    </ApolloWrapper>
  )
}

export default BacentaLeader
