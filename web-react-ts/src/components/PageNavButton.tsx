import { Button, Icon, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { useNavigate } from 'react-router'

type PageNavButtonTypes = {
  icon: IconType
  label: string
  to: string
}
const PageNavButton = (props: PageNavButtonTypes) => {
  const navigate = useNavigate()
  return (
    <Button
      width={`100%`}
      paddingY="30px"
      size="lg"
      justifyContent={`flex-start`}
      onClick={() => navigate(props.to)}
    >
      <Icon
        as={props.icon}
        w={5}
        h={5}
        color="red.500"
        margin="0px 10px 0 0px"
        verticalAlign="middle"
      />
      <Text verticalAlign="middle">{props.label}</Text>
    </Button>
  )
}

export default PageNavButton
