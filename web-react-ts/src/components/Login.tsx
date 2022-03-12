import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@chakra-ui/react'
import { useQuery } from '@apollo/client'
import { GET_MEMBERS } from '../queries/fetch-members'
import { member, members } from '../queries/member-types'

const Login = () => {
  const { loading, error, data } = useQuery(GET_MEMBERS)
  console.log(data)

  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0()

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Something went wrong! {error.message}</h1>

  // data?.getMembers.map((member: member) => <h1> {member.firstName}</h1>)

  return (
    <div>
      {!isAuthenticated ? (
        <Button onClick={() => loginWithRedirect()}>Login</Button>
      ) : (
        <>
          <h1>{user?.email}</h1>
          <Button onClick={() => logout()}>Log Out</Button>
        </>
      )}
    </div>
  )
}

export default Login
