import { RouteArrayType } from 'types/global-types'
import BacentaLeader from './HomePage/BacentaLeader'
import ConstituencyLeader from './HomePage/ConstituencyLeader'
import CouncilLeader from './HomePage/CouncilLeader'
import FellowshipLeader from './HomePage/FellowshipLeader'
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
    element: FellowshipLeader,
    roles: ['leaderFellowship'],
  },
  {
    path: '/bacenta/dashboard',
    element: BacentaLeader,
    roles: ['leaderBacenta'],
  },
  {
    path: '/constituency/dashboard',
    element: ConstituencyLeader,
    roles: ['leaderConstituency'],
  },
  {
    path: '/council/dashboard',
    element: CouncilLeader,
    roles: ['leaderCouncil'],
  },
  {
    path: '/member-details',
    element: ProfilePage,
    roles: ['all'],
  },
]
