import { gql } from '@apollo/client'

export const RECORD_MEMBER_FELLOWSHIP_ATTENDANCE = gql`
  mutation RecordMemberFellowshipAttendance(
    $presentMembers: [ID!]!
    $absentMembers: [ID!]!
    $churchId: ID!
  ) {
    RecordMemberFellowshipPresent(
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
    RecordMemberFellowshipAbsent(
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
    RecordMemberBacentaPresent(
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
    RecordMemberBacentaAbsent(
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
