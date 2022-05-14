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

const ProfileChoosePage = () => {
  let navigate = useNavigate()
  const { setUser } = useUser()
  const { logout, loginWithRedirect, isAuthenticated } = useAuth0()
  const { data, loading, error } = useQuery(GET_USER_ROLES, {
    onCompleted: (data) => {
      setUser(data?.members[0])
    },
  })
  const user = data?.members[0]

  let bacenta_leader,
    bishop,
    constituency_overseer,
    resident_bishop,
    sheep_seeking,
    super_admin,
    location: string

  if (user?.leadsBacenta.length > 0) {
    location = ''
    user?.leadsBacenta.forEach((bacenta: memberRole): void => {
      location = location.concat(bacenta.name + '  ')
    })

    bacenta_leader = (
      <GridButton
        onClick={() => navigate('/dashboard')}
        roleName="Bacenta Leader"
        roleLocation={location}
      />
    )
  }
  if (user?.leadsCouncil.length > 0) {
    location = ''
    user?.leadsCouncil.forEach((council: memberRole) => {
      location = location.concat(council.name + ' ')
    })
    bishop = <GridButton roleName="Bishop" roleLocation={location} />
  }
  if (user?.leadsConstituency.length > 0) {
    location = ''
    user?.leadsConstituency.forEach((constituency: memberRole) => {
      location = location.concat(constituency.name + '  ')
    })
    constituency_overseer = (
      <GridButton roleName="Constituency Overseer" roleLocation={location} />
    )
  }
  if (user?.leadsGatheringService.length > 0) {
    location = ''
    user?.leadsGatheringService.forEach((gatheringService: memberRole) => {
      location = location.concat(gatheringService.name + '  ')
    })
    resident_bishop = (
      <GridButton roleName="Resident Bishop" roleLocation={location} />
    )
  }
  if (user?.leadsSonta.length > 0) {
    location = ''
    user?.leadsSonta.forEach((sonta: memberRole) => {
      location = location.concat(sonta.name + '  ')
    })
    sheep_seeking = (
      <GridButton roleName="Sheep Seeking Login" roleLocation={location} />
    )
  }
  if (user?.isAdminForGatheringService.length > 0) {
    location = ''
    user?.isAdminForGatheringService.forEach((superAdmin: memberRole) => {
      location = location.concat(superAdmin.name + '  ')
    })
    super_admin = <GridButton roleName="Super Admin" roleLocation={location} />
  }

  return (
    <ApolloWrapper data={data} loading={loading} error={error}>
      {isAuthenticated ? (
        <Container>
          <HeaderText />
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            {bacenta_leader}
            {bishop}
            {constituency_overseer}
            {resident_bishop}
            {sheep_seeking}
            {super_admin}
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
