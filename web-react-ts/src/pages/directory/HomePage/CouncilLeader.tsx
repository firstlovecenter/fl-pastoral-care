import { useQuery } from '@apollo/client'
import ApolloWrapper from 'components/ApolloWrapper/ApolloWrapper'
import { ChurchContext } from 'context/ChurchContext'
import React, { useContext } from 'react'
import HomePage from './HomePage'
import { DISPLAY_COUNCIL_HOMEPAGE } from './Queries'

const CouncilLeader = () => {
  const { councilId } = useContext(ChurchContext)
  const apolloResponse = useQuery(DISPLAY_COUNCIL_HOMEPAGE, {
    variables: {
      id: councilId,
    },
  })

  const council = apolloResponse.data?.councils[0]
  const stream = council?.stream

  return (
    <ApolloWrapper apolloResponse={apolloResponse}>
      <HomePage church={council} higherChurch={stream} />
    </ApolloWrapper>
  )
}

export default CouncilLeader
