import React, { useCallback, useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { ChakraProvider } from '@chakra-ui/react'
import { EnvProvider } from './context/env.context'
import { useAuth0 } from '@auth0/auth0-react'
import { Auth0ProviderWithHistory } from './auth0-provider-with-history'
import theme from './theme'
import CacheBuster from './CacheBuster'

const AppWithSetUp = () => {
  const [accessToken, setAccessToken] = useState('')
  const { getAccessTokenSilently } = useAuth0()

  const getAccessToken = useCallback(async () => {
    try {
      const token = await getAccessTokenSilently({
        audience: 'https://flcadmin.netlify.app/graphql',
        scope: 'read:current_user',
      })
      // console.log(token)

      setAccessToken(token)
      sessionStorage.setItem('token', token)
    } catch (err) {
      // eslint-disable-next-line
      console.error(err)
    }
  }, [getAccessTokenSilently])

  useEffect(() => {
    getAccessToken()
  }, [getAccessToken])

  const httpLink = createHttpLink({
    uri: 'http://localhost:4001/graphql', //process.env.REACT_APP_GRAPHQL_URI || '/graphql',
  })

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = sessionStorage.getItem('token') || accessToken

    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    }
  })

  const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_URI || '/graphql',
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })

  return (
    <CacheBuster>
      {({
        loading,
        isLatestVersion,
        refreshCacheAndReload,
      }: {
        loading: any
        isLatestVersion: any
        refreshCacheAndReload: any
      }) => {
        if (loading) return null
        if (!loading && !isLatestVersion) {
          refreshCacheAndReload()
        }

        return (
          <ApolloProvider client={client}>
            <App />
          </ApolloProvider>
        )
      }}
    </CacheBuster>
  )
}

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <EnvProvider>
        <Router>
          <Auth0ProviderWithHistory>
            <AppWithSetUp />
          </Auth0ProviderWithHistory>
        </Router>
      </EnvProvider>
    </ChakraProvider>
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
