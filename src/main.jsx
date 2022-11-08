import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/main.scss'
import { BrowserRouter } from 'react-router-dom'
import Auth0ProviderWithHistory from './auth/Auth0ProviderWithHistory'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Auth0ProviderWithHistory>
			<App />
		</Auth0ProviderWithHistory>
	</BrowserRouter>
)
