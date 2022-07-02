import { GridItem, Avatar, Text } from '@chakra-ui/react'
import useCustomColor from '../hooks/useCustomColor'

interface ButtonProps {
  src: string
  roleName: string
  roleLocation: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const GridButton = (props: ButtonProps) => {
  const { bg } = useCustomColor()

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
      bg={bg}
      onClick={props.onClick}
    >
      <Text fontSize="sm">{props.roleName}</Text>
      <Avatar name="Dan Abrahmov" src={props.src} size="lg" />
      <Text fontSize="10px" style={{ textAlign: 'center' }}>
        {props.roleLocation}
      </Text>
    </GridItem>
  )
}

export default GridButton
