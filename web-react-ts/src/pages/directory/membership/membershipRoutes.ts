import { RouteArrayType } from 'types/global-types'
import FellowshipFirstTimers from './idl/FellowshipFirstTimers'

export const membershipRoutes: RouteArrayType = [
  {
    path: '/fellowship/first-timers',
    element: FellowshipFirstTimers,
    roles: ['leaderFellowship'],
  },
]
