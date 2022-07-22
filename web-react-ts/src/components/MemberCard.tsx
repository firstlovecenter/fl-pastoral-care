import { PhoneIcon } from '@chakra-ui/icons'
import { Avatar, Button, Flex, Spacer, Text } from '@chakra-ui/react'
import { ChurchContext } from 'context/ChurchContext'
import useCustomColor from 'hooks/useCustomColor'
import React, { useContext } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { useNavigate } from 'react-router'
import { StreamOptions } from 'types/global-types'
import { transformImage } from 'utils/global-utils'

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
    <Flex
      onClick={() => {
        clickCard(member)
        navigate('/member-details')
      }}
      key={member.id}
      background={bg}
      borderRadius={20}
      padding={5}
    >
      <Avatar
        loading="lazy"
        name={member?.fullName}
        marginRight="10px"
        src={transformImage(member?.pictureUrl)}
        size={'lg'}
      />

      <Text alignSelf="center" fontWeight="bold">
        {member.fullName}
      </Text>
      <Spacer />
      <Button
        as="a"
        href={`tel:${member.phoneNumber}`}
        colorScheme="twitter"
        alignSelf="center"
        rounded="full"
        marginRight="5px"
      >
        <PhoneIcon />
      </Button>
      <Button
        as="a"
        href={`https://wa.me/${member.whatsappNumber}`}
        colorScheme="whatsapp"
        alignSelf="center"
        rounded="full"
      >
        <FaWhatsapp size={25} />
      </Button>
    </Flex>
  )
}

export default MemberCard
