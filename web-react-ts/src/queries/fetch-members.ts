import { gql } from '@apollo/client'

export const GET_MEMBERS = gql`
  {
    members(where: { email: "jaedagy@gmail.com" }) {
      id
      sheep {
        firstName
        lastName
        pictureUrl
      }
      goat {
        firstName
        lastName
      }
      deer {
        firstName
        lastName
      }
    }
  }
`
