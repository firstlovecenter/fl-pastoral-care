export const transformImage = (url: string, size?: 'lg'): string => {
  if (size === 'lg') {
    return url?.replace(
      'https://res.cloudinary.com/firstlovecenter/image/upload/',
      'https://res.cloudinary.com/firstlovecenter/image/upload/c_fill,g_face,h_300,w_300/'
    )
  }

  return url?.replace(
    'https://res.cloudinary.com/firstlovecenter/image/upload/',
    'https://res.cloudinary.com/firstlovecenter/image/upload/c_thumb,g_face,h_150,w_150,z_0.7/'
  )
}
