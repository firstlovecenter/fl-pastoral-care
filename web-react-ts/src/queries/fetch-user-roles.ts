import { gql } from '@apollo/client'

export const GET_USER_ROLES = gql`
  {
    members(where: { email: "jaedagy@gmail.com" }) {
      id
      firstName
      lastName
      leadsBacenta {
        __typename
        name
      }
      leadsConstituency {
        __typename
        name
      }
      leadsSonta {
        __typename
        name
      }
      leadsCouncil {
        __typename
        name
      }
      leadsFellowship {
        __typename
        name
      }

      leadsGatheringService {
        __typename
        name
      }
      isAdminForGatheringService {
        __typename
        name
      }
    }
  }
`
