import { gql } from '@apollo/client'

export const GET_USER_ROLES = gql`
  {
    members(where: { email: "jaedagy@gmail.com" }) {
      id
      firstName
      lastName
      pictureUrl
      leadsBacenta {
        id
        __typename
        name
      }
      leadsConstituency {
        id
        __typename
        name
      }
      leadsSonta {
        id
        __typename
        name
      }
      leadsCouncil {
        id
        __typename
        name
      }
      leadsFellowship {
        id
        __typename
        name
      }

      leadsGatheringService {
        __typename
        name
      }
      isAdminForGatheringService {
        id
        __typename
        name
      }
    }
  }
`
