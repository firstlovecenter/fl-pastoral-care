import React from 'react'

export type RouteArrayType = {
  path: string
  roles?: string[]
  element: () => JSX.Element
  placeholder?: boolean
}[]

export interface PropsChildrenInterface {
  children: React.ReactNode
}

// CHURCHES
export type ChurchLevel =
  | 'Fellowship'
  | 'Bacenta'
  | 'Constituency'
  | 'Council'
  | 'Stream'
  | 'GatheringService'
  | 'Denomination'
  | 'Sonta'

export type TimeGraph = {
  date: string
}
export interface Church {
  id: string
  name: string
  leader: {
    id: string
    firstName: string
    lastName: string
    fullName: string
    phoneNumber: string
    whatsappNumber: string
    pictureUrl: string
  }
  vacationStatus: 'Vacation' | 'Active'
  __typename: ChurchLevel
}

export interface Fellowship extends Church {
  __typename: 'Fellowship'
  services: ServiceRecord[]
}

export interface Bacenta extends Church {
  __typename: 'Bacenta'
  services: ServiceRecord[]
}

export type ChurchIdAndName = {
  id: string
  name: string
}

export type StreamOptions = 'Campus' | 'Town' | 'Anagkazo'

export interface Stream extends Church {
  id: string
  name: string
  __typename: 'Stream'
}

//MEMBERSHIP
export interface MemberWithoutBioData {
  id: string
  // eslint-disable-next-line camelcase
  auth_id?: string
  firstName: string
  lastName: string
  fullName: string
  pictureUrl: string
  __typename: 'Member'
  stream_name: StreamOptions
}

export interface Member {
  __typename: 'Member'
  id: string
  // eslint-disable-next-line camelcase
  auth_id: string
  firstName: string
  middleName?: string
  lastName: string
  fullName: string
  email: string
  pictureUrl: string
  phoneNumber: string
  whatsappNumber: string
  dob: string
  maritalStatus: string
  gender: { gender: 'Male' | 'Female' }
  occupation: string
  fellowship: {
    id: string
    name: string
  }
  ministry: {
    id: string
    name: string
  }
}

export interface MemberWithChurches extends Member {
  leadsFellowship: Church[]
  leadsBacenta: Church[]
  leadsConstituency: Church[]
  leadsCouncil: Church[]
  leadsStream: Church[]
  leadsSonta: Church[]
  leadsGatheringService: Church[]
  leadsDenomination: Church[]
  leadsMinistry: Church[]
  isAdminForConstituency: Church[]
  isAdminForCouncil: Church[]
  isAdminForStream: Church[]
  isAdminForGatheringService: Church[]
}

export interface Servant {
  id: string
  roles: Role[]
}

export type ServantType =
  | 'Leader'
  | 'Admin'
  | 'ArrivalsAdmin'
  | 'ArrivalsCounter'
  | 'ArrivalsConfirmer'
  | 'Teller'

export type ServantTypeLowerCase =
  | 'leader'
  | 'admin'
  | 'arrivalsAdmin'
  | 'arrivalsCounter'
  | 'arrivalsConfirmer'

export type Role =
  | 'leaderFellowship'
  | 'leaderBacenta'
  | 'leaderConstituency'
  | 'leaderCouncil'
  | 'leaderStream'
  | 'leaderSonta'
  | 'leaderGatheringService'
  | 'leaderDenomination'
  | 'adminConstituency'
  | 'adminCouncil'
  | 'adminStream'
  | 'adminGatheringService'
  | 'arrivalsAdminGatheringService'
  | 'arrivalsAdminStream'
  | 'arrivalsAdminCouncil'
  | 'arrivalsAdminConstituency'
  | 'arrivalsConfirmerStream'
  | 'arrivalsCounterStream'
  | 'tellerStream'
  | 'all'

export type VerbTypes =
  | 'leader'
  | 'admin'
  | 'arrivalsAdmin'
  | 'arrivalsCounter'
  | 'arrivalsConfirmer'
  | 'leads'
  | 'isAdminFor'
  | 'isArrivalsAdminFor'
  | 'isArrivalsCounterFor'
  | 'isArrivalsConfirmerFor'

interface Record {
  id: string
  attendance: number
  week: number
  serviceDate: TimeGraph
  markedAttendance: boolean
  membersPresent: MemberWithoutBioData[]
  membersAbsent: MemberWithoutBioData[]
}
export interface ServiceRecord extends Record {
  __typename: 'ServiceRecord' | 'RehearsalRecord'
  stream_name: StreamOptions
  noServiceReason: string
}

export interface BussingRecord extends Record {
  __typename: 'BussingRecord'
}
