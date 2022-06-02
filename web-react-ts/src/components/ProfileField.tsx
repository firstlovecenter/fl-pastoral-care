import { Box, Text } from '@chakra-ui/react'
interface ProfileFieldProps {
  Text: string
  SubText?: string
}
const ProfileField = (props: ProfileFieldProps) => {
  return (
    <Box
      marginTop={`10px`}
      borderRadius="8px"
      paddingBottom="5px"
      paddingLeft="10px"
      paddingTop={`3px`}
      textAlign="left"
      bgColor="blackAlpha.500"
    >
      <Text fontSize="12px" color={`ActiveCaption`}>
        {props.Text}
      </Text>
      <Text fontSize="xs" color="CaptionText">
        {props.SubText || ' - '}
      </Text>
    </Box>
  )
}

export default ProfileField
