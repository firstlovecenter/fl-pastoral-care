import React from 'react'
import { Env } from '../utils/env'

const domain: string | undefined = process.env.REACT_APP_AUTH0_DOMAIN
const clientId: string | undefined = process.env.REACT_APP_AUTH0_CLIENT_ID
const audience: string | undefined = process.env.REACT_APP_AUTH0_AUDIENCE
const apiServerUrl: string | undefined = process.env.REACT_APP_GRAPHQL_URI

const isEnvValid = domain && clientId && audience && apiServerUrl

if (!isEnvValid) {
  throw new Error('Missing environment variables.')
}

const dotenv: Env = {
  domain: domain,
  clientId: clientId,
  audience: audience,
  apiServerUrl: apiServerUrl,
}

export const EnvContext = React.createContext<Env>(dotenv)

export const useEnv = () => {
  const context = React.useContext(EnvContext)
  if (!context) {
    throw new Error(`useEnv must be used within a EnvProvider`)
  }
  return context
}

type EnvProviderProps = {
  children: React.ReactNode
}

export const EnvProvider = (props: EnvProviderProps) => {
  return <EnvContext.Provider value={dotenv} {...props} />
}
