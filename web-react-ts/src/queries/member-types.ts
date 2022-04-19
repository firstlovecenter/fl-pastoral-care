export interface member {
  firstName: string
  lastName: string
  pictureUrl: string
  gender?: string
  dob?: string
  phoneNumber?: string
  streamName?: string
}

export interface members {
  getMembers: member[]
}

export interface memberRole {
  __typename: string
  name: string
}
