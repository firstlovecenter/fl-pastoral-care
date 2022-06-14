import { RouteArrayType } from '../../types/global-types'
import BacentaSundayAttendance from './AttendanceTicker'

export const attendance: RouteArrayType = [
  { path: '/bacenta/sunday-attendance', element: BacentaSundayAttendance },
]
