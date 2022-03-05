import { Input } from '@chakra-ui/react'

interface FormInputInterface {
  description?: string
  type: string
  placeholder: string
}

export const FormInput = (props: FormInputInterface) => (
  <div style={{ padding: '8px', width: '100%' }} className="row">
    <Input
      style={{ backgroundColor: 'white', height: '50px' }}
      type={props.type}
      placeholder={props.placeholder}
    />
  </div>
)
