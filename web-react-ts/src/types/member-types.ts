import { StreamEnum } from '../hooks/useClickCard'

export interface member {
  id: string
  __typename: string
  stream_name: StreamEnum
  firstName: string
  lastName: string
  pictureUrl: string
  gender: GenderType
  dob: string
  phoneNumber?: string
  streamName?: string
}

export interface members {
  getMembers: member[]
}

export interface memberRole {
  __typename: string
  name: string
  id: string
  stream_name: StreamEnum
}

enum GenderEnum {
  Male = 'Male',
  Female = 'Female',
}
export type GenderType = {
  gender: GenderEnum
}
