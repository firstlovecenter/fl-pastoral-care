export type RouteArrayType = {
  path: string
  roles?: string[]
  element: () => JSX.Element
  placeholder?: boolean
}[]
