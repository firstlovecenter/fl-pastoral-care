import { Avatar, Flex, Spacer, Text } from '@chakra-ui/react'
import { ChurchContext } from 'context/ChurchContext'
import useCustomColor from 'hooks/useCustomColor'
import { useContext } from 'react'
import { useNavigate } from 'react-router'
import { StreamOptions } from 'types/global-types'
import { transformImage } from 'utils/global-utils'
import PhoneButton from './button/PhoneButton'
import WhatsappButton from './button/WhatsappButton'

type MemberCardType = {
  __typename: string
  id: string
  stream_name: StreamOptions
  fullName: string
  pictureUrl: string
  phoneNumber: string
  whatsappNumber: string
}

const MemberCard = ({ member }: { member: MemberCardType }) => {
  const { bg } = useCustomColor()
  const { clickCard } = useContext(ChurchContext)

  const navigate = useNavigate()
  return (
    <Flex key={member.id} background={bg} borderRadius={20} padding={5}>
      <Avatar
        loading="lazy"
        name={member?.fullName}
        marginRight="10px"
        src={transformImage(member?.pictureUrl)}
        size={'lg'}
        onClick={() => {
          clickCard(member)
          navigate('/member-details')
        }}
      />

      <Text alignSelf="center" fontWeight="bold">
        {member.fullName}
      </Text>
      <Spacer />
      <PhoneButton number={member.phoneNumber} />
      <WhatsappButton number={member.whatsappNumber} />
    </Flex>
  )
}

export default MemberCard
