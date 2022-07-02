import { RouteArrayType } from '../../types/global-types'
import BacentaAttendanceTicker from './BacentaAttendanceTicker'
import FellowshipAttendanceTicker from './FellowshipAttendanceTicker'

export const attendance: RouteArrayType = [
  { path: '/bacenta/sunday-attendance', element: BacentaAttendanceTicker },
  {
    path: '/fellowship/sunday-attendance',
    element: FellowshipAttendanceTicker,
  },
]
