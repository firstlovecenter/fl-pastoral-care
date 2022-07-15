import { RouteArrayType } from '../../types/global-types'
import BacentaAttendanceTicker from './ticker/BacentaAttendanceTicker'
import FellowshipAttendanceReport from './report/FellowshipAttendanceReport'
import FellowshipAttendanceTicker from './ticker/FellowshipAttendanceTicker'
import FellowshipServicesList from './FellowshipServicesList'

export const attendance: RouteArrayType = [
  { path: '/bacenta/sunday-attendance', element: BacentaAttendanceTicker },
  { path: '/fellowship/services-list', element: FellowshipServicesList },
  {
    path: '/fellowship/attendance-report',
    element: FellowshipAttendanceReport,
  },
  {
    path: '/fellowship/weekday-attendance',
    element: FellowshipAttendanceTicker,
  },
]
