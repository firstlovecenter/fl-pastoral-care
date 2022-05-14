import React, { useContext } from 'react'
import { Avatar, Text, Icon } from '@chakra-ui/react'
import ProfileField from '../../../components/ProfileField'
import { MdArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { ChurchContext } from '../../../context/ChurchContext'
import { useQuery } from '@apollo/client'
import { GET_MEMBER_PROFILE } from './ProfilePage.gql'
import ApolloWrapper from '../../../components/ApolloWrapper/ApolloWrapper'

const ProfilePage = () => {
  const { memberId } = useContext(ChurchContext)
  const { data, loading, error } = useQuery(GET_MEMBER_PROFILE, {
    variables: { id: memberId },
  })
  const navigate = useNavigate()
  const member = data?.members[0]

  return (
    <ApolloWrapper data={data} loading={loading} error={error}>
      <>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginTop: '40px',
            marginBottom: '10px',
          }}
        >
          <Icon
            style={{ alignSelf: 'flex-start', marginLeft: '10px' }}
            as={MdArrowBackIosNew}
            color="white"
            onClick={() => navigate('/member-list')}
          />

          <Text
            style={{ alignSelf: 'center', paddingLeft: '80px' }}
            fontSize="xl"
            color="white"
          >
            Member Details
          </Text>
        </div>
        <div
          style={{
            backgroundColor: '#393a39',
            height: 'auto',
            padding: '20px',
            textAlign: 'center',
            minHeight: '800px',
            paddingLeft: '10px',
            paddingRight: '10px',
          }}
        >
          <Avatar
            loading="lazy"
            size="xl"
            name={member?.firstName + ' ' + member?.lastName}
            style={{ marginRight: '10px' }}
            src={member?.pictureUrl}
          />
          <Text fontSize="2xl" style={{ color: 'white' }}>
            {' '}
            {member?.firstName} {member?.lastName}
          </Text>

          <ProfileField Text="Sex" SubText={member?.gender.gender} />
          <ProfileField Text="Date Of Birth" SubText={member?.dob.date} />
          <ProfileField Text="Phone Number" SubText={member?.phoneNumber} />
          <ProfileField Text="Stream" SubText={member?.stream_name} />
          <ProfileField Text="Bacenta Leader" SubText="" />
          <ProfileField Text="Basonta" SubText="" />
          <ProfileField Text="Holy Ghost Baptism" SubText="" />
          <ProfileField Text="Water Baptism" SubText="" />
          <ProfileField Text="Notes" SubText="" />
          <ProfileField Text="Invited By" SubText="" />
          <ProfileField Text="Last Visited" SubText="" />
        </div>
      </>
    </ApolloWrapper>
  )
}

export default ProfilePage
