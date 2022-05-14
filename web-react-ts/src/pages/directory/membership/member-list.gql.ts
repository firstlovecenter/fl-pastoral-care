import { gql } from '@apollo/client'

export const GET_MEMBERS = gql`
  {
    members(where: { email: "jaedagy@gmail.com" }) {
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
