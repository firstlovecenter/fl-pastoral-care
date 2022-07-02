import { ListMemberInterface } from 'pages/directory/membership/member-list.types'

export type Church = {
  id: string
  sheep: ListMemberInterface[]
  goat: ListMemberInterface[]
  deer: ListMemberInterface[]
}
