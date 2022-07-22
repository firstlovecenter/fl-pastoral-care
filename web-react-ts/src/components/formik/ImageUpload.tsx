import { Center, Image, Input, Spinner, Text } from '@chakra-ui/react'
import { ErrorMessage } from 'formik'
import { useState } from 'react'
import TextError from './TextError'

type ImageUploadProps = {
  label?: string
  name: string
  initialValue: string
  setFieldValue: (fieldName: string, value: string) => void
  uploadPreset: 'membership-attendance' | 'developer-tests'
  placeholder: string
  error?: string
}

const ImageUpload = (props: ImageUploadProps) => {
  const {
    label,
    name,
    initialValue,
    setFieldValue,
    uploadPreset,
    placeholder,
    error,
  } = props
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState('')

  const uploadImage = async (e: { target: { files: any } }) => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', uploadPreset)

    setLoading(true)

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/firstlovecenter/image/upload',
      {
        method: 'POST',
        body: data,
      }
    )
    const file = await res.json()

    setImage(file.secure_url)

    setFieldValue(`${name}`, file.secure_url)
    setLoading(false)
  }

  return (
    <>
      {label ? (
        <label className="label" htmlFor={name}>
          {label}
        </label>
      ) : null}
      {loading && (
        <Center>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            label="Uploading Image"
          />
        </Center>
      )}
      {(image || initialValue) && (
        <>
          <Image
            src={image || initialValue}
            alt=""
            padding="15px"
            width="100%"
            borderRadius="20px"
            marginBottom="10px"
          />
        </>
      )}
      <Text as="label" width="100%">
        <Input
          id={name}
          name={name}
          style={{ display: 'none' }}
          type="file"
          accept="image/png, image/webp"
          onChange={uploadImage}
        />

        <Center
          as="p"
          backgroundColor="twitter.500"
          padding={15}
          rounded="xl"
          boxShadow="lg"
        >
          {placeholder}
        </Center>
      </Text>
      {error && <TextError>{props.error}</TextError>}
      {!error ?? <ErrorMessage name={name} />}
    </>
  )
}

export default ImageUpload
