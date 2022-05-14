import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const uri = process.env.REACT_APP_GRAPHQL_URI || '/graphql'
const cache = new InMemoryCache()

const client = new ApolloClient({
  uri,
  cache,
})

it('renders without crashing', () => {
  const container = document.getElementById('root')
  const root = createRoot(container!)

  root.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
  root.unmount()
})
