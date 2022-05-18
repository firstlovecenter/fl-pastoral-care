import { gql } from '@apollo/client'

export const GET_USER_ROLES = gql`
  query ($id: ID!) {
    members(where: { id: $id }) {
      id
      firstName
      lastName
      pictureUrl
      leadsBacenta {
        id
        name
      }
      leadsConstituency {
        id
        name
      }
      leadsSonta {
        id
        name
      }
      leadsCouncil {
        id
        name
      }
      leadsFellowship {
        id
        name
      }

      leadsGatheringService {
        id
        name
      }
      isAdminForGatheringService {
        id
        name
      }
    }
  }
`
