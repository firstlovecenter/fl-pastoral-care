import { useQuery } from '@apollo/client'
import ApolloWrapper from 'components/ApolloWrapper/ApolloWrapper'
import { ChurchContext } from 'context/ChurchContext'
import React, { useContext } from 'react'
import HomePage from './HomePage'
import { DISPLAY_FELLOWSHIP_HOMEPAGE } from './Queries'

const FellowshipLeader = () => {
  const { fellowshipId } = useContext(ChurchContext)
  const apolloData = useQuery(DISPLAY_FELLOWSHIP_HOMEPAGE, {
    variables: {
      id: fellowshipId,
    },
  })

  const fellowship = apolloData.data?.fellowships[0]
  const constituency = fellowship?.bacenta.constituency

  return (
    <ApolloWrapper apolloData={apolloData}>
      <HomePage church={fellowship} higherChurch={constituency} />
    </ApolloWrapper>
  )
}

export default FellowshipLeader
