import { Avatar, ListItem } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { ChurchContext } from '../../../context/ChurchContext'
import { transformImage } from '../../../utils/global-utils'
import { ListMemberInterface } from './member-list.types'

const MemberListItem = ({
  member,
  ...rest
}: {
  member: ListMemberInterface
}) => {
  const navigate = useNavigate()
  const { clickCard } = useContext(ChurchContext)
  return (
    <ListItem
      {...rest}
      onClick={() => {
        clickCard(member)
        navigate('/member-details')
      }}
      fontSize="20px"
    >
      <Avatar
        loading="lazy"
        size="sm"
        name={member.firstName + ' ' + member.lastName}
        marginRight="10px"
        src={transformImage(member.pictureUrl)}
      />
      {member.firstName} {member.lastName}
    </ListItem>
  )
}

export default MemberListItem
