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

export const GET_BACENTA_BUSSING_REPORT = gql`
  query getBacentaBussingReport($bussingRecordId: ID!, $bacentaId: ID!) {
    bacentas(where: { id: $bacentaId }) {
      id
      name
    }
    bussingRecords(where: { id: $bussingRecordId }) {
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
