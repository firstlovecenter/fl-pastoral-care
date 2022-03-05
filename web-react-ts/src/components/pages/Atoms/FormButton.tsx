import { Button } from '@chakra-ui/react'

interface FormButtonInterface {
  title: string
  color?: string
  size?: string
}

export const FormButton = (props: FormButtonInterface) => (
  <div style={{ padding: '8px', width: '100%' }} className="row">
    <Button
      bg={props.color}
      style={{ width: '100% ', color: 'white' }}
      size={props.size}
    >
      {props.title}
    </Button>
  </div>
)
