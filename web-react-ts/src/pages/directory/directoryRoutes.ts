import LandingPage from './LandingPage'

export type RouteArrayType = [
  {
    path: string
    roles: string[]
    element: () => JSX.Element
    placeholder?: boolean
  }
]

export const directory: RouteArrayType = [
  {
    path: '/landing-page',
    element: LandingPage,
    roles: ['all'],
  },
]
