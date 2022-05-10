import { Grid, Button } from '@chakra-ui/react'

import { useAuth0 } from '@auth0/auth0-react'
import { memberRole } from '../../queries/member-types'
import { useNavigate } from 'react-router-dom'
import GridButton from '../../components/CustomGridItem'
import StyledContainer from '../../components/StyledContainer'
import HeaderText from '../../components/HeaderText'
import useUser from '../../hooks/useUser'
import { useQuery } from '@apollo/client'
import { GET_USER_ROLES } from '../../queries/user-roles.gql'

const LandingPage = () => {
  let navigate = useNavigate()
  const { setUser } = useUser()

  const { data, loading, error } = useQuery(GET_USER_ROLES)

  const user = data?.members[0]
  if (user) setUser(user)
  const { logout, loginWithRedirect, isAuthenticated } = useAuth0()

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
        onClick={() => navigate('/bacenta-buttons')}
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
    user?.leadsSonta.map((sonta: memberRole) => {
      location = location.concat(sonta.name + '  ')
    })
    sheep_seeking = (
      <GridButton roleName="Sheep Seeking Login" roleLocation={location} />
    )
  }
  if (user?.isAdminForGatheringService.length > 0) {
    location = ''
    user?.isAdminForGatheringService.map((superAdmin: memberRole) => {
      location = location.concat(superAdmin.name + '  ')
    })
    super_admin = <GridButton roleName="Super Admin" roleLocation={location} />
  }

  return (
    <>
      {isAuthenticated ? (
        <StyledContainer>
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
        </StyledContainer>
      ) : (
        <Button onClick={() => loginWithRedirect()}>Login</Button>
      )}
    </>
  )
}

export default LandingPage
