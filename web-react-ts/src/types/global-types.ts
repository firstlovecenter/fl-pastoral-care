import React from 'react'

export type RouteArrayType = {
  path: string
  roles?: string[]
  element: () => JSX.Element
  placeholder?: boolean
}[]

export interface PropsChildrenInterface {
  children: React.ReactNode
}

export type ChurchLevel =
  | 'Fellowship'
  | 'Bacenta'
  | 'Constituency'
  | 'Council'
  | 'Stream'
  | 'GatheringService'
export interface Church {
  id: string
  name: string
  __typename: ChurchLevel
}
