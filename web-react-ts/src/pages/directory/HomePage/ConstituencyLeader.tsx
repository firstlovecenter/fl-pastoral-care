import { useQuery } from '@apollo/client'
import ApolloWrapper from 'components/ApolloWrapper/ApolloWrapper'
import { ChurchContext } from 'context/ChurchContext'
import React, { useContext } from 'react'
import HomePage from './HomePage'
import { DISPLAY_CONSTITUENCY_HOMEPAGE } from './Queries'

const ConstituencyLeader = () => {
  const { constituencyId } = useContext(ChurchContext)
  const apolloResponse = useQuery(DISPLAY_CONSTITUENCY_HOMEPAGE, {
    variables: {
      id: constituencyId,
    },
  })

  const constituency = apolloResponse.data?.constituencies[0]
  const council = constituency?.council

  return (
    <ApolloWrapper apolloResponse={apolloResponse}>
      <HomePage church={constituency} higherChurch={council} />
    </ApolloWrapper>
  )
}

export default ConstituencyLeader
