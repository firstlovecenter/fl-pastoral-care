import Navigation from '../../components/Navigation'
import HomePage from './HomePage/HomePage'
import BacentaMembers from './membership/BacentaMembers'
import ConstituencyMembers from './membership/ConsituencyMembers'
import CouncilMembers from './membership/CouncilMembers'
import ProfilePage from './membership/ProfilePage'
import LandingPage from './ProfileChoosePage'

export type RouteArrayType = {
  path: string
  roles?: string[]
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
    path: '/nav',
    element: Navigation,
  },
  {
    path: '/bacenta/member-list',
    element: BacentaMembers,
    roles: ['leaderBacenta'],
  },
  {
    path: '/constituency/member-list',
    element: ConstituencyMembers,
    roles: ['leaderConstituency'],
  },
  {
    path: '/council/member-list',
    element: CouncilMembers,
    roles: ['leaderCouncil'],
  },

  {
    path: '/bacenta/dashboard',
    element: HomePage,
    roles: ['leaderBacenta'],
  },
  {
    path: '/constituency/dashboard',
    element: HomePage,
    roles: ['leaderConstituency'],
  },
  {
    path: '/council/dashboard',
    element: HomePage,
    roles: ['leaderCouncil'],
  },
  {
    path: '/member-profile-page',
    element: ProfilePage,
    roles: ['all'],
  },
]
