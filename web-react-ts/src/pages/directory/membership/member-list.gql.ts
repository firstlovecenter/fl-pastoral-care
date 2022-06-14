import { gql } from '@apollo/client'

export const GET_MEMBERS = gql`
  query ($id: ID!) {
    members(where: { id: $id }) {
      id
      sheep {
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
      goat {
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
      deer {
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
  }
`

export const GET_BACENTA_MEMBERS = gql`
  query ($id: ID!) {
    bacentas(where: { id: $id }) {
      id
      sheep {
        id
        firstName
        lastName
        fullName
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
      goat {
        id
        firstName
        lastName
        fullName
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
      deer {
        id
        firstName
        lastName
        fullName
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
  }
`

export const GET_CONSTITUENCY_MEMBERS = gql`
  query ($id: ID!) {
    constituencies(where: { id: $id }) {
      id
      sheep {
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
      goat {
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
      deer {
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
  }
`

export const GET_COUNCIL_MEMBERS = gql`
  query ($id: ID!) {
    councils(where: { id: $id }) {
      id
      sheep {
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
      goat {
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
      deer {
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
  }
`
