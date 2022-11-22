const config = {
	auth0Domain: import.meta.env.VITE_AUTH0_DOMAIN,
	auth0ClientId: import.meta.env.VITE_AUTH0_CLIENTID,
	auth0RedirectUri: import.meta.env.VITE_AUTH0_REDIRECTURI,
	apiURL: import.meta.env.VITE_API_URL,
}

export default config
