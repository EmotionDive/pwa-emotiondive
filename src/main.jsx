import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/main.scss'
import { BrowserRouter } from 'react-router-dom'
import Auth0ProviderWithHistory from './auth/Auth0ProviderWithHistory'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ActivitiesProvider, UserProvider } from './data'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<QueryClientProvider client={queryClient}>
			<Auth0ProviderWithHistory>
				<UserProvider>
					<ActivitiesProvider>
						<App />
					</ActivitiesProvider>
				</UserProvider>
			</Auth0ProviderWithHistory>
		</QueryClientProvider>
	</BrowserRouter>
)
