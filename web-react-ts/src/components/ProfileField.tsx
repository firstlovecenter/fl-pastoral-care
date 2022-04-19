import { Box, Text } from '@chakra-ui/react'
interface ProfileFieldProps {
  Text: string
  SubText: string
}
const ProfileField = (props: ProfileFieldProps) => {
  return (
    <>
      <Box
        style={{
          marginTop: '10px',
          height: '40px',
          backgroundColor: '#222422',
          borderRadius: '3px',
        }}
      >
        <div style={{ paddingLeft: '5px', textAlign: 'left' }}>
          <Text fontSize="12px" color={'white'}>
            {props.Text}
          </Text>
          <Text fontSize="xs" color={'GrayText'}>
            {props.SubText}
          </Text>
        </div>
      </Box>
    </>
  )
}

export default ProfileField
