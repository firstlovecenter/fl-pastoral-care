import { gql } from '@apollo/client'

export const GET_MEMBERS = gql`
  query getMembers($id: ID!) {
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
      }
      goats {
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
      }
    }
  }
`

export const GET_FELLOWSHIP_MEMBERS = gql`
  query getFellowshipMembers($id: ID!, $serviceRecordId: ID) {
    serviceRecords(where: { id: $serviceRecordId }) {
      id
      serviceDate {
        date
      }
    }
    fellowships(where: { id: $id }) {
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
      }
      goats {
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
      }
    }
  }
`

export const GET_BACENTA_MEMBERS = gql`
  query getBacentaMembers($id: ID!, $bussingRecordId: ID) {
    bussingRecords(where: { id: $bussingRecordId }) {
      id
      serviceDate {
        date
      }
    }
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
      }
      goats {
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
      }
    }
  }
`

export const GET_CONSTITUENCY_MEMBERS = gql`
  query getConstituencyMembers($id: ID!) {
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
      }
      goats {
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
      }
    }
  }
`

export const GET_COUNCIL_MEMBERS = gql`
  query getCouncilMembers($id: ID!) {
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
      }
      goats {
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
      }
    }
  }
`
