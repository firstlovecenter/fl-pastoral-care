type ProtectedRouteProps = {
  children: JSX.Element
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  return <>{children}</>
}

export default ProtectedRoute
