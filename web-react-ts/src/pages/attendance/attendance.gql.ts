import { gql } from '@apollo/client'

export const RECORD_MEMBER_FELLOWSHIP_ATTENDANCE = gql`
  mutation RecordMemberFellowshipAttendance(
    $presentMembers: [ID!]!
    $absentMembers: [ID!]!
    $churchId: ID!
  ) {
    RecordMemberFellowshipAttendance(
      presentMembers: $presentMembers
      churchId: $churchId
    ) {
      id
      membersAttended {
        id
        firstName
        lastName
      }
    }
    RecordMemberFellowshipAbsentees(
      absentMembers: $absentMembers
      churchId: $churchId
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
    RecordMemberBacentaAttendance(
      presentMembers: $presentMembers
      absentMembers: $absentMembers
      churchId: $churchId
    ) {
      id
      membersAttended {
        id
        firstName
        lastName
      }
      membersAbsent {
        id
        firstName
        lastName
      }
    }
  }
`
