import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
import useCustomColor from 'hooks/useCustomColor'
import PhoneButton from './button/PhoneButton'
import WhatsappButton from './button/WhatsappButton'
interface ProfileFieldProps {
  Text: string
  SubText?: string
}

const ProfileField = (props: ProfileFieldProps) => {
  const { bg } = useCustomColor()

  return (
    <Flex
      marginTop={`10px`}
      borderRadius="8px"
      paddingY="8px"
      paddingLeft="10px"
      textAlign="left"
      bgColor={bg}
    >
      <Box>
        <Text fontSize="12px" color={`ActiveCaption`}>
          {props.Text}
        </Text>
        <Text fontWeight="bold" color="CaptionText">
          {props.SubText ?? <Text color={bg}>No Data</Text>}
        </Text>
      </Box>
      <Spacer />
      <Box marginRight={5}>
        {props.Text === 'Phone Number' && (
          <PhoneButton number={props.SubText || ''} />
        )}
        {props.Text === 'Whatsapp Number' && (
          <WhatsappButton number={props.SubText || ''} />
        )}
      </Box>
    </Flex>
  )
}

export default ProfileField
