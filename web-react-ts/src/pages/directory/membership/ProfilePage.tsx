import React from 'react'
import { useLocation } from 'react-router-dom'
import { Avatar, Text, Icon } from '@chakra-ui/react'
import ProfileField from '../../../components/ProfileField'
import { MdArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {
  const { state }: any = useLocation()

  let navigate = useNavigate()

  return (
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
          name={state.data.firstName + ' ' + state.data.firstName}
          style={{ marginRight: '10px' }}
          src={state.data.pictureUrl}
        />
        <Text fontSize="2xl" style={{ color: 'white' }}>
          {' '}
          {state.data.firstName} {state.data.lastName}
        </Text>

        <ProfileField Text="Sex" SubText={state.data.gender.gender} />
        <ProfileField Text="Date Of Birth" SubText={state.data.dob.date} />
        <ProfileField Text="Phone Number" SubText={state.data.phoneNumber} />
        <ProfileField Text="Stream" SubText={state.data.stream_name} />
        <ProfileField Text="Bacenta Leader" SubText="" />
        <ProfileField Text="Basonta" SubText="" />
        <ProfileField Text="Holy Ghost Baptism" SubText="" />
        <ProfileField Text="Water Baptism" SubText="" />
        <ProfileField Text="Notes" SubText="" />
        <ProfileField Text="Invited By" SubText="" />
        <ProfileField Text="Last Visited" SubText="" />
      </div>
    </>
  )
}

export default ProfilePage
