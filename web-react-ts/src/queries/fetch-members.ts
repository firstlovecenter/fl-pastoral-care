import { gql } from '@apollo/client'

export const GET_MEMBERS = gql`
  {
    members(where: { email: "jaedagy@gmail.com" }) {
      id
      sheep {
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
