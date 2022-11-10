import { useAuth0 } from '@auth0/auth0-react'
import { Navigate } from 'react-router-dom'
import LoginPage from '../modules/login/LoginPage'

const RootAuthPage = () => {
	const { isAuthenticated } = useAuth0()

	if (isAuthenticated) return <Navigate to='/actividades' replace />
	else return <LoginPage />
}

export default RootAuthPage
