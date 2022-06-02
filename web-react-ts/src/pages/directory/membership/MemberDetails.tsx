import { useContext } from 'react'
import { Avatar, Text, Center, Container } from '@chakra-ui/react'
import ProfileField from '../../../components/ProfileField'
import { ChurchContext } from '../../../context/ChurchContext'
import { useQuery } from '@apollo/client'
import { GET_MEMBER_PROFILE } from './MemberDetails.gql'
import ApolloWrapper from '../../../components/ApolloWrapper/ApolloWrapper'
import { transformImage } from '../../../utils/global-utils'
import { getHumanReadableDate } from 'jd-date-utils'

const MemberDetails = () => {
  const { memberId } = useContext(ChurchContext)
  const { data, loading, error } = useQuery(GET_MEMBER_PROFILE, {
    variables: { id: memberId },
  })
  const member = data?.members[0]

  return (
    <ApolloWrapper apolloData={{ data, loading, error }}>
      <Container>
        <Center marginTop="40px">
          <Text fontSize="xl">Member Details</Text>
        </Center>
        <div
          style={{
            // backgroundColor: '#393a39',
            height: 'auto',
            padding: '20px',
            textAlign: 'center',
            minHeight: '800px',
          }}
        >
          <Avatar
            loading="lazy"
            size="xl"
            name={member?.firstName + ' ' + member?.lastName}
            marginRight="10px"
            src={transformImage(member?.pictureUrl)}
          />
          <Text fontSize="2xl">
            {member?.firstName} {member?.lastName}
          </Text>

          <ProfileField Text="Sex" SubText={member?.gender.gender} />
          <ProfileField
            Text="Date Of Birth"
            SubText={getHumanReadableDate(member?.dob.date)}
          />
          <ProfileField Text="Phone Number" SubText={member?.phoneNumber} />
          <ProfileField Text="Stream" SubText={member?.stream_name} />
          <ProfileField Text="Bacenta Leader" />
          <ProfileField Text="Basonta" />
          <ProfileField Text="Holy Ghost Baptism" />
          <ProfileField Text="Water Baptism" />
          <ProfileField Text="Notes" />
          <ProfileField Text="Invited By" />
          <ProfileField Text="Last Visited" />
        </div>
      </Container>
    </ApolloWrapper>
  )
}

export default MemberDetails
