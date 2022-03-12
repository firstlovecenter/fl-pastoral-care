import { gql } from '@apollo/client'

export const GET_MEMBERS = gql`
  {
    members(where: { email: "jaedagy@gmail.com" }) {
      members {
        firstName
        lastName
      }
    }
  }
`
