import StyledContainer from './StyledContainer'
import HeaderText from './HeaderText'
import { Grid, Button } from '@chakra-ui/react'
import GridButton from './CustomGridItem'
import { useQuery } from '@apollo/client'
import { GET_USER_ROLES } from '../queries/fetch-user-roles'
import { useAuth0 } from '@auth0/auth0-react'
import { memberRole } from '../queries/member-types'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  let navigate = useNavigate()

  function memberPage() {
    console.log('memberpage called')
    navigate('/member-list')
  }

  const { logout, loginWithRedirect, isAuthenticated } = useAuth0()

  const { loading, error, data } = useQuery(GET_USER_ROLES)

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Something went wrong! {error.message}</h1>

  let bacenta_leader,
    bishop,
    constituency_overseer,
    resident_bishop,
    sheep_seeking,
    super_admin,
    location: string

  if (data.members[0].leadsBacenta.length > 0) {
    location = ''
    data.members[0].leadsBacenta.map((bacenta: memberRole): void => {
      location = location.concat(bacenta.name + '  ')
    })

    bacenta_leader = (
      <GridButton
        onClick={memberPage}
        roleName="Bacenta Leader"
        roleLocation={location}
      />
    )
  }
  if (data.members[0].leadsCouncil.length > 0) {
    location = ''
    data.members[0].leadsCouncil.map((council: memberRole) => {
      location = location.concat(council.name + ' ')
    })
    bishop = <GridButton roleName="Bishop" roleLocation={location} />
  }
  if (data.members[0].leadsConstituency.length > 0) {
    location = ''
    data.members[0].leadsConstituency.map((constituency: memberRole) => {
      location = location.concat(constituency.name + '  ')
    })
    constituency_overseer = (
      <GridButton roleName="Constituency Overseer" roleLocation={location} />
    )
  }
  if (data.members[0].leadsGatheringService.length > 0) {
    location = ''
    data.members[0].leadsGatheringService.map(
      (gatheringService: memberRole) => {
        location = location.concat(gatheringService.name + '  ')
      }
    )
    resident_bishop = (
      <GridButton roleName="Resident Bishop" roleLocation={location} />
    )
  }
  if (data.members[0].leadsSonta.length > 0) {
    location = ''
    data.members[0].leadsSonta.map((sonta: memberRole) => {
      location = location.concat(sonta.name + '  ')
    })
    sheep_seeking = (
      <GridButton roleName="Sheep Seeking Login" roleLocation={location} />
    )
  }
  if (data.members[0].isAdminForGatheringService.length > 0) {
    location = ''
    data.members[0].isAdminForGatheringService.map((superAdmin: memberRole) => {
      location = location.concat(superAdmin.name + '  ')
    })
    super_admin = <GridButton roleName="Super Admin" roleLocation={location} />
  }

  // console.log(bacenta_leader)
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
            variantColor="green"
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
