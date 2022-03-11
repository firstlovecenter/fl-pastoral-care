import gql from 'graphql-tag'

export const GET_MEMBERS = gql`
  {
    members(where: { email: "londonfldata@gmail.com" }) {
      members {
        firstName
        lastName
      }
    }
  }
`
