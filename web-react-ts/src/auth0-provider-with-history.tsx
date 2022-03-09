import { AppState, Auth0Provider } from '@auth0/auth0-react'
import { PropsWithChildren } from 'react'
import { useNavigate } from 'react-router'
import { useEnv } from './context/env.context'

export const Auth0ProviderWithHistory = ({
  children,
}: PropsWithChildren<any>): JSX.Element | null => {
  const navigate = useNavigate()
  const { domain, clientId, audience } = useEnv()

  const onRedirectCallback = (appState: AppState) => {
    navigate(appState?.returnTo || window.location.pathname)
  }

  if (!(domain && clientId && audience)) {
    return null
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      audience={audience}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  )
}
