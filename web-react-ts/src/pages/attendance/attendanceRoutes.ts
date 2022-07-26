import { RouteArrayType } from '../../types/global-types'
import BacentaAttendanceTicker from './ticker/BacentaAttendanceTicker'
import FellowshipAttendanceReport from './report/FellowshipAttendanceReport'
import FellowshipAttendanceTicker from './ticker/FellowshipAttendanceTicker'
import FellowshipServicesList from './FellowshipServicesList'
import BacentaServicesList from './BacentaServicesList'
import BacentaAttendanceReport from './report/BacentaAttendanceReport'

export const attendance: RouteArrayType = [
  { path: '/bacenta/services-list', element: BacentaServicesList },
  { path: '/bacenta/tick-attendance', element: BacentaAttendanceTicker },
  { path: '/bacenta/attendance-report', element: BacentaAttendanceReport },
  { path: '/fellowship/services-list', element: FellowshipServicesList },
  {
    path: '/fellowship/weekday-attendance',
    element: FellowshipAttendanceTicker,
  },
  {
    path: '/fellowship/attendance-report',
    element: FellowshipAttendanceReport,
  },
]
