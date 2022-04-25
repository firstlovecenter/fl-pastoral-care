import { ApolloError } from '@apollo/client'
import React from 'react'
import ErrorScreen from './ErrorScreen'
import LoadingScreen from './LoadingScreen'

type ApolloWrapperPropsType = {
  data: any
  loading: boolean
  error: ApolloError | undefined
  placeholder: boolean
  children: JSX.Element
}

const ApolloWrapper = (props: ApolloWrapperPropsType) => {
  const { loading, error, data, placeholder } = props

  if (data || placeholder) {
    return <>{props.children}</>
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
