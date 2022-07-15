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

export const RECORD_MEMBER_FELLOWSHIP_ATTENDANCE = gql`
  mutation RecordMemberFellowshipAttendance(
    $presentMembers: [ID!]!
    $absentMembers: [ID!]!
    $recordId: ID!
  ) {
    RecordMemberFellowshipPresent(
      presentMembers: $presentMembers
      recordId: $recordId
    ) {
      id
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
      membersAbsent {
        id
        firstName
        lastName
        pictureUrl
      }
    }
  }
`
