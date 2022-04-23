import { gql } from '@apollo/client'

export const GET_USER_ROLES = gql`
  {
    members(where: { email: "jaedagy@gmail.com" }) {
      id
      firstName
      lastName
      pictureUrl
      leadsBacenta(options: { limit: 1 }) {
        id
        __typename
        name
      }
      leadsConstituency(options: { limit: 1 }) {
        id
        __typename
        name
      }
      leadsSonta(options: { limit: 1 }) {
        id
        __typename
        name
      }
      leadsCouncil(options: { limit: 1 }) {
        id
        __typename
        name
      }
      leadsFellowship(options: { limit: 1 }) {
        id
        __typename
        name
      }

      leadsGatheringService(options: { limit: 1 }) {
        __typename
        name
      }
      isAdminForGatheringService(options: { limit: 1 }) {
        id
        __typename
        name
      }
    }
  }
`
