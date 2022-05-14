import BacentaLeaderHomePage from './BacentaLeaderHomePage'
import MemberList from './membership/MemberList'
import ProfilePage from './membership/ProfilePage'
import LandingPage from './ProfileChoosePage'

export type RouteArrayType = {
  path: string
  roles: string[]
  element: () => JSX.Element
  placeholder?: boolean
}[]

export const directory: RouteArrayType = [
  {
    path: '/profile-choose-page',
    element: LandingPage,
    roles: ['all'],
  },
  {
    path: '/member-list',
    element: MemberList,
    roles: ['all'],
  },
  {
    path: '/dashboard',
    element: BacentaLeaderHomePage,
    roles: ['all'],
  },
  {
    path: '/member-profile-page',
    element: ProfilePage,
    roles: ['all'],
  },
]
