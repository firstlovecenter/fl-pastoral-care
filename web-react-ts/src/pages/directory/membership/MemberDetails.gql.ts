import { gql } from '@apollo/client'

export const GET_MEMBER_PROFILE = gql`
  query getMemberProfile($id: ID!) {
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
      whatsappNumber
      stream_name
      ministry {
        id
        name
      }
      fellowship {
        id
        leader {
          id
          firstName
          lastName
          fullName
        }
      }
    }
  }
`
