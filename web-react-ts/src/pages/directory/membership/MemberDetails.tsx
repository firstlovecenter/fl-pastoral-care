import { useContext } from 'react'
import { Avatar, Text, Center, Container, Box } from '@chakra-ui/react'
import ProfileField from '../../../components/ProfileField'
import { ChurchContext } from '../../../context/ChurchContext'
import { useQuery } from '@apollo/client'
import { GET_MEMBER_PROFILE } from './MemberDetails.gql'
import ApolloWrapper from '../../../components/ApolloWrapper/ApolloWrapper'
import { transformImage } from '../../../utils/global-utils'
import { getHumanReadableDate } from 'jd-date-utils'
import { capitalise } from 'global-utils'
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
    { text: 'Whatsapp Number', subText: member?.whatsappNumber },
    { text: 'Stream', subText: capitalise(member?.stream_name) },
    { text: 'Fellowship Leader', subText: member?.fellowship.leader.fullName },
    { text: 'Basonta', subText: member?.ministry.name },
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
          <Text fontSize="xl" paddingBottom={10}>
            Member Details
          </Text>
        </Center>
        <Box textAlign={'center'} minHeight={'800px'}>
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
          {details.map((detail, index) => (
            <ProfileField
              key={index}
              Text={detail.text}
              SubText={detail.subText}
            />
          ))}
        </Box>
      </Container>
    </ApolloWrapper>
  )
}

export default MemberDetails
