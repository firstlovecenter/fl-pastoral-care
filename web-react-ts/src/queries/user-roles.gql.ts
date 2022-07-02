import { gql } from '@apollo/client'

export const GET_USER_ROLES = gql`
  query ($id: String!) {
    members(where: { auth_id: $id }) {
      id
      firstName
      lastName
      pictureUrl
      leadsFellowship {
        id
        name
      }
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
