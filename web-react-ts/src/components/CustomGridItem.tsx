import { GridItem, Avatar, Text } from '@chakra-ui/react'

interface ButtonProps {
  roleName: string
  roleLocation: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const GridButton = (props: ButtonProps) => {
  return (
    <GridItem
      style={{
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        padding: '10px',
        cursor: 'pointer',
      }}
      w="95%"
      h="160"
      bg="#292a29"
      onClick={props.onClick}
    >
      <Text fontSize="sm" style={{ color: 'white' }}>
        {props.roleName}
      </Text>
      <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" size="lg" />
      <Text fontSize="10px" style={{ color: 'white', textAlign: 'center' }}>
        {props.roleLocation}
      </Text>
    </GridItem>
  )
}

export default GridButton
