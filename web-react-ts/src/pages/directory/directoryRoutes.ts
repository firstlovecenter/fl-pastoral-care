import Navigation from '../../components/Navigation'
import { RouteArrayType } from '../../types/global-types'
import HomePage from './HomePage/HomePage'
import BacentaMembers from './membership/BacentaMembers'
import ConstituencyMembers from './membership/ConsituencyMembers'
import CouncilMembers from './membership/CouncilMembers'
import FellowshipMembers from './membership/FellowshipMembers'
import ProfilePage from './membership/MemberDetails'
import LandingPage from './ProfileChoosePage'

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
    path: '/fellowship/member-list',
    element: FellowshipMembers,
    roles: ['leaderfellowship'],
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
    path: '/fellowship/dashboard',
    element: HomePage,
    roles: ['leaderFellowship'],
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
    path: '/member-details',
    element: ProfilePage,
    roles: ['all'],
  },
]
