import { gql } from '@apollo/client'

export const GET_MEMBER_PROFILE = gql`
  query ($id: ID!) {
    members(where: { id: $id }) {
      id
      firstName
      lastName
      pictureUrl
      gender {
        gender
      }
      dob {
        date
      }
      phoneNumber
      stream_name
    }
  }
`
