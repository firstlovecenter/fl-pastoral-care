import { ApolloError } from '@apollo/client'
import { Box } from '@chakra-ui/react'
import React from 'react'
import ErrorScreen from './ErrorScreen'
import LoadingScreen from './LoadingScreen'

type ApolloWrapperPropsType = {
  placeholder?: boolean
  apolloResponse: {
    data: any
    loading: boolean
    error?: ApolloError | undefined
  }
  children: JSX.Element
}

const ApolloWrapper = (props: ApolloWrapperPropsType) => {
  const { apolloResponse, placeholder } = props
  const { data, loading, error } = apolloResponse

  if (data || placeholder) {
    return <Box paddingBottom={100}>{props.children}</Box>
  } else if (loading) {
    return <LoadingScreen />
  } else if (error) {
    // eslint-disable-next-line no-console
    console.log(error)
    return <ErrorScreen />
  }

  return <LoadingScreen />
}

export default ApolloWrapper
