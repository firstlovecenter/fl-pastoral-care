import { RouteArrayType } from '../../types/global-types'
import BacentaAttendanceTicker from './BacentaAttendanceTicker'
import FellowshipAttendanceReport from './FellowshipAttendanceReport'
import FellowshipAttendanceTicker from './FellowshipAttendanceTicker'

export const attendance: RouteArrayType = [
  { path: '/bacenta/sunday-attendance', element: BacentaAttendanceTicker },
  {
    path: '/fellowship/attendance-report',
    element: FellowshipAttendanceReport,
  },
  {
    path: '/fellowship/weekday-attendance',
    element: FellowshipAttendanceTicker,
  },
]
