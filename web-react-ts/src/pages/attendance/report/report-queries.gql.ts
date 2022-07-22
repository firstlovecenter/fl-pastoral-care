import { gql } from '@apollo/client'

export const GET_FELLOWSHIP_SERVICE_REPORT = gql`
  query getFellowshipServiceReport($serviceRecordId: ID!, $fellowshipId: ID!) {
    fellowships(where: { id: $fellowshipId }) {
      id
      name
    }
    serviceRecords(where: { id: $serviceRecordId }) {
      id
      serviceDate {
        date
      }
      membersPicture
      membersPresent {
        id
        firstName
        lastName
        fullName
        phoneNumber
        whatsappNumber
        pictureUrl
      }
      membersAbsent {
        id
        firstName
        lastName
        fullName
        phoneNumber
        whatsappNumber
        pictureUrl
      }
    }
  }
`
