import { gql } from '@apollo/client'

export const DISPLAY_FELLOWSHIP_SERVICES = gql`
  query DisplayFellowshipServices($id: ID!) {
    fellowships(where: { id: $id }) {
      id
      name
      services(limit: 10) {
        id
        attendance
        markedAttendance
        serviceDate {
          date
        }
      }
    }
  }
`

export const DISPLAY_BACENTA_SERVICES = gql`
  query DisplayBacentaServices($id: ID!) {
    bacentas(where: { id: $id }) {
      id
      name

      services(limit: 10) {
        id
        attendance
        markedAttendance
        serviceDate {
          date
        }
      }
    }
  }
`

export const RECORD_MEMBER_FELLOWSHIP_ATTENDANCE = gql`
  mutation RecordMemberFellowshipAttendance(
    $membersPicture: String!
    $presentMembers: [ID!]!
    $absentMembers: [ID!]!
    $recordId: ID!
  ) {
    RecordMemberFellowshipPresent(
      presentMembers: $presentMembers
      membersPicture: $membersPicture
      recordId: $recordId
    ) {
      id
      markedAttendance
      membersPicture
      membersPresent {
        id
        firstName
        lastName
      }
    }
    RecordMemberFellowshipAbsent(
      absentMembers: $absentMembers
      recordId: $recordId
    ) {
      id
      markedAttendance
      membersAbsent {
        id
        firstName
        lastName
      }
    }
  }
`

export const RECORD_MEMBER_BACENTA_ATTENDANCE = gql`
  mutation RecordMemberBacentaAttendance(
    $presentMembers: [ID!]!
    $absentMembers: [ID!]!
    $churchId: ID!
  ) {
    RecordMemberBacentaPresent(
      presentMembers: $presentMembers
      churchId: $churchId
    ) {
      id
      markedAttendance
      membersPresent {
        id
        firstName
        lastName
        pictureUrl
      }
    }
    RecordMemberBacentaAbsent(
      absentMembers: $absentMembers
      churchId: $churchId
    ) {
      id
      markedAttendance
      membersAbsent {
        id
        firstName
        lastName
        pictureUrl
      }
    }
  }
`
