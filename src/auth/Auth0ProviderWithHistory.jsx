import { Auth0Provider } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import config from '../../config'
import PropTypes from 'prop-types'

const Auth0ProviderWithHistory = ({ children }) => {
	const navigate = useNavigate()

	const onRedirectCallback = (appState) => {
		try {
			if (appState && appState.returnTo) {
				console.log('Redirect to' + appState.returnTo)
				navigate(appState.returnTo, { replace: true })
			}
		} catch (ex) {
			console.error(ex)
		}
	}

	return (
		<Auth0Provider
			domain={config.auth0Domain}
			clientId={config.auth0ClientId}
			redirectUri={config.auth0RedirectUri}
			onRedirectCallback={onRedirectCallback}
		>
			{children}
		</Auth0Provider>
	)
}

Auth0ProviderWithHistory.propTypes = {
	children: PropTypes.any,
}

export default Auth0ProviderWithHistory
