import { gql } from '@apollo/client'

export const GET_FELLOWSHIP_IDLS = gql`
  query GetFellowshipIdls($id: ID!) {
    fellowships(where: { id: $id }) {
      id
      name
      idls {
        id
        firstName
        lastName
        fullName
        pictureUrl
        phoneNumber
        whatsappNumber
      }
    }
  }
`
