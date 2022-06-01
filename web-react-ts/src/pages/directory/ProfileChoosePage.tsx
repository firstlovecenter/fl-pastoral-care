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
import { ChurchContext } from '../../context/ChurchContext'

const ProfileChoosePage = () => {
  let navigate = useNavigate()
  const { setUser } = useUser()
  const { clickCard } = useContext(ChurchContext)
  const { user, logout, loginWithRedirect, isAuthenticated } = useAuth0()
  const { data, loading, error } = useQuery(GET_USER_ROLES, {
    variables: {
      id: user?.sub || '',
    },
    onCompleted: (data) => {
      setUser(data?.members[0])
    },
  })
  const loggedInUser = data?.members[0]

  return (
    <ApolloWrapper apolloData={{ data, loading, error }}>
      {isAuthenticated ? (
        <Container>
          <HeaderText />
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            {loggedInUser?.leadsBacenta.map(
              (bacenta: memberRole, i: number): JSX.Element => (
                <GridButton
                  key={i}
                  onClick={() => {
                    clickCard(bacenta)
                    navigate('/bacenta/dashboard')
                  }}
                  roleName="Bacenta Leader"
                  roleLocation={bacenta.name}
                />
              )
            )}
            {loggedInUser?.leadsConstituency.map(
              (constituency: memberRole, i: number): JSX.Element => (
                <GridButton
                  key={i}
                  onClick={() => {
                    clickCard(constituency)
                    navigate('/constituency/dashboard')
                  }}
                  roleName="Constituency Overseer"
                  roleLocation={constituency.name}
                />
              )
            )}
            {loggedInUser?.leadsCouncil.map(
              (council: memberRole, i: number): JSX.Element => (
                <GridButton
                  key={i}
                  onClick={() => {
                    clickCard(council)
                    navigate('/council/dashboard')
                  }}
                  roleName="Bishop"
                  roleLocation={council.name}
                />
              )
            )}
            {loggedInUser?.leadsGatheringService.map(
              (gatheringService: memberRole, i: number): JSX.Element => (
                <GridButton
                  key={i}
                  onClick={() => {
                    clickCard(gatheringService)
                    navigate('gathering-service/dashboard')
                  }}
                  roleName="Resident Bishop"
                  roleLocation={gatheringService.name}
                />
              )
            )}
            {loggedInUser?.isAdminForGatheringService.map(
              (gatheringService: memberRole, i: number): JSX.Element => (
                <GridButton
                  key={i}
                  onClick={() => navigate('/admin/dashboard')}
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
