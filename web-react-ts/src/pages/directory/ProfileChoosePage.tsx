import { Grid, Button, Container } from '@chakra-ui/react'

import { useAuth0 } from '@auth0/auth0-react'
import { memberRole } from '../../types/member-types'
import { useNavigate } from 'react-router-dom'
import GridButton from '../../components/CustomGridItem'
import HeaderText from '../../components/HeaderText'
import useUser from '../../hooks/useUser'
import { useQuery } from '@apollo/client'
import { GET_USER_ROLES } from '../../queries/user-roles.gql'
import ApolloWrapper from '../../components/ApolloWrapper/ApolloWrapper'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { ChurchContext } from '../../context/ChurchContext'

const ProfileChoosePage = () => {
  let navigate = useNavigate()
  const { setUser } = useUser()
  const { currentUser } = useContext(UserContext)
  const { clickCard } = useContext(ChurchContext)
  const { logout, loginWithRedirect, isAuthenticated } = useAuth0()
  const { data, loading, error } = useQuery(GET_USER_ROLES, {
    variables: {
      id: currentUser.id,
    },
    onCompleted: (data) => {
      setUser(data?.members[0])
    },
  })
  const user = data?.members[0]

  return (
    <ApolloWrapper data={data} loading={loading} error={error}>
      {isAuthenticated ? (
        <Container>
          <HeaderText />
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            {user?.leadsBacenta.map(
              (bacenta: memberRole, i: number): JSX.Element => (
                <GridButton
                  key={i}
                  onClick={() => {
                    clickCard(bacenta)
                    navigate('/dashboard')
                  }}
                  roleName="Bacenta Leader"
                  roleLocation={bacenta.name}
                />
              )
            )}
            {user?.leadsCouncil.map(
              (council: memberRole, i: number): JSX.Element => (
                <GridButton
                  key={i}
                  onClick={() => navigate('/dashboard')}
                  roleName="Bishop"
                  roleLocation={council.name}
                />
              )
            )}
            {user?.leadsConstituency.map(
              (constituency: memberRole, i: number): JSX.Element => (
                <GridButton
                  key={i}
                  onClick={() => navigate('/dashboard')}
                  roleName="Constituency Overseer"
                  roleLocation={constituency.name}
                />
              )
            )}
            {user?.leadsGatheringService.map(
              (gatheringService: memberRole, i: number): JSX.Element => (
                <GridButton
                  key={i}
                  onClick={() => navigate('/dashboard')}
                  roleName="Resident Bishop"
                  roleLocation={gatheringService.name}
                />
              )
            )}
            {user?.isAdminForGatheringService.map(
              (gatheringService: memberRole, i: number): JSX.Element => (
                <GridButton
                  key={i}
                  onClick={() => navigate('/dashboard')}
                  roleName="Super Admin"
                  roleLocation={gatheringService.name}
                />
              )
            )}
          </Grid>

          <Button
            style={{
              width: '97%',
              color: 'white',
              backgroundColor: '#a53c35',
              marginTop: '40px',
            }}
            onClick={() => logout()}
          >
            Log Out
          </Button>
        </Container>
      ) : (
        <Button onClick={() => loginWithRedirect()}>Login</Button>
      )}
    </ApolloWrapper>
  )
}

export default ProfileChoosePage
