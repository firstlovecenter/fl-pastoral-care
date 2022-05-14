import { StreamEnum } from '../../../hooks/useClickCard'
import { GenderType } from '../../../types/member-types'

export interface ListMemberInterface {
  id: string
  __typename: string
  stream_name: StreamEnum
  firstName: string
  lastName: string
  pictureUrl: string
  gender: GenderType
  dob?: string
  phoneNumber: string
}

export interface members {
  getMembers: ListMemberInterface[]
}

export interface memberRole {
  __typename: string
  name: string
}
