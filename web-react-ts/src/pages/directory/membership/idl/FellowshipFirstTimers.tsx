import { useQuery } from '@apollo/client'
import {
  Container,
  Heading,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react'
import ApolloWrapper from 'components/ApolloWrapper/ApolloWrapper'
import MemberCard from 'components/MemberCard'
import Notice from 'components/Notice'
import { ChurchContext } from 'context/ChurchContext'
import React, { useContext } from 'react'
import { Fellowship } from 'types/global-types'
import { GET_FELLOWSHIP_IDLS } from './firstTimers.gql'

const FellowshipFirstTimers = () => {
  const { fellowshipId } = useContext(ChurchContext)

  const apolloResponse = useQuery(GET_FELLOWSHIP_IDLS, {
    variables: { id: fellowshipId },
  })

  const fellowship: Fellowship = apolloResponse.data?.fellowships[0]

  return (
    <ApolloWrapper apolloResponse={apolloResponse}>
      <Container paddingY={10}>
        <Heading>First Timers & New Converts</Heading>

        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
        >
          {fellowship?.idls.map((idl) => (
            <MemberCard key={idl.id} member={idl} />
          ))}
        </VStack>
        {!fellowship?.idls.length && (
          <Notice>
            <Text>No First Timers Found</Text>
          </Notice>
        )}
      </Container>
    </ApolloWrapper>
  )
}

export default FellowshipFirstTimers
