import { Role, StreamOptions } from 'types/global-types'
import React, { useContext } from 'react'
import { UserContext } from 'context/UserContext'
import useAuth from 'auth/useAuth'

type RoleViewProps = {
  roles: Role[]
  children: React.ReactNode
  verifyId?: string
  permittedStream?: StreamOptions[]
}

const RoleView = (props: RoleViewProps) => {
  const { roles, children, verifyId, permittedStream } = props
  const { currentUser } = useContext(UserContext)
  const { isAuthorised } = useAuth()

  const verify = (verifyId: string | undefined) => {
    if (!verifyId) return true

    if (currentUser.id === verifyId) {
      return true
    }

    return false
  }
  console.log(roles)
  const permitStream = (permittedStream: StreamOptions[] | undefined) => {
    if (!permittedStream) return true

    if (permittedStream?.includes(currentUser.stream_name)) {
      return true
    }

    return false
  }

  if (
    isAuthorised(roles) &&
    verify(verifyId) &&
    permitStream(permittedStream)
  ) {
    return <>{children}</>
  } else {
    return null
  }
}

export default RoleView
