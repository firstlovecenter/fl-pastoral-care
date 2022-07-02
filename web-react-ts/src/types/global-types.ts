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
