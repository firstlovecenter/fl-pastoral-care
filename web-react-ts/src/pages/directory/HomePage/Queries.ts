import { gql } from '@apollo/client'

export const DISPLAY_FELLOWSHIP_HOMEPAGE = gql`
  query DisplayFellowshipHomePage($id: ID!) {
    fellowships(where: { id: $id }) {
      id
      name
      bacenta {
        id
        name
        constituency {
          id
          name
        }
      }
    }
  }
`

export const DISPLAY_BACENTA_HOMEPAGE = gql`
  query DisplayBacentaHomePage($id: ID!) {
    bacentas(where: { id: $id }) {
      id
      name
      constituency {
        id
        name
      }
    }
  }
`

export const DISPLAY_CONSTITUENCY_HOMEPAGE = gql`
  query DisplayConstituencyHomePage($id: ID!) {
    constituencies(where: { id: $id }) {
      id
      name
      council {
        id
        name
      }
    }
  }
`

export const DISPLAY_COUNCIL_HOMEPAGE = gql`
  query DisplayCouncilHomePage($id: ID!) {
    councils(where: { id: $id }) {
      id
      name
      stream {
        id
        name
      }
    }
  }
`
