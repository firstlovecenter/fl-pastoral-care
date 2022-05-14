import React from 'react'
import { Icon, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const PageNavButton = (props: any) => {
  let navigate = useNavigate()

  function memberPage() {
    navigate('/member-list')
  }

  return (
    <section
      style={{
        display: 'flex',
        color: 'white',
        background: '#292a29',
        margin: '15px 10px 0 10px',
        height: '50px',
        padding: '10px',
        borderRadius: '5px',
      }}
      onClick={memberPage}
    >
      <Icon
        as={props.icon}
        w={5}
        h={5}
        color="red.500"
        style={{ margin: '5px 25px 0 10px' }}
      />
      <Text fontSize="sm" verticalAlign="middle" paddingTop="5px">
        {props.label}
      </Text>
    </section>
  )
}

export default PageNavButton
