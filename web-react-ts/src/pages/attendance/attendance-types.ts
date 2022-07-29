import { ListMemberInterface } from 'pages/directory/membership/member-list.types'
import { Church } from 'types/global-types'

export interface ChurchForAttendance extends Church {
  id: string

  sheep: ListMemberInterface[]
  goats: ListMemberInterface[]
  deer: ListMemberInterface[]
}
