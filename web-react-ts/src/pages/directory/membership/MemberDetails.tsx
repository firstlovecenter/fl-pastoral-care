import { useContext } from 'react'
import { Avatar, Text, Center, Container } from '@chakra-ui/react'
import ProfileField from '../../../components/ProfileField'
import { ChurchContext } from '../../../context/ChurchContext'
import { useQuery } from '@apollo/client'
import { GET_MEMBER_PROFILE } from './MemberDetails.gql'
import ApolloWrapper from '../../../components/ApolloWrapper/ApolloWrapper'
import { transformImage } from '../../../utils/global-utils'
import { getHumanReadableDate } from 'jd-date-utils'
type DetailType = {
  text: string
  subText?: string
}
const MemberDetails = () => {
  const { memberId } = useContext(ChurchContext)
  const { data, loading, error } = useQuery(GET_MEMBER_PROFILE, {
    variables: { id: memberId },
  })
  const member = data?.members[0]
  const details: DetailType[] = [
    { text: 'Sex', subText: member?.gender.gender },
    { text: 'Date of Birth', subText: getHumanReadableDate(member?.dob.date) },
    { text: 'Phone Number', subText: member?.phoneNumber },
    { text: 'Stream', subText: member?.stream_name },
    { text: 'Bacenta Leader' },
    { text: 'Basonta' },
    { text: 'Holy Ghost Baptism' },
    { text: 'Water Baptism' },
    { text: 'Notes' },
    { text: 'Invited By' },
    { text: 'Last Visited' },
  ]
  return (
    <ApolloWrapper apolloData={{ data, loading, error }}>
      <Container>
        <Center marginTop="40px">
          <Text fontSize="xl">Member Details</Text>
        </Center>
        <div
          style={{
            height: 'auto',
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
          {details.map((detail) => (
            <ProfileField Text={detail.text} SubText={detail.subText} />
          ))}
        </div>
      </Container>
    </ApolloWrapper>
  )
}

export default MemberDetails
