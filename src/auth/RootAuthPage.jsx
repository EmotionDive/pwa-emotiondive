import { useAuth0 } from '@auth0/auth0-react'
import { Navigate } from 'react-router-dom'
import useUser from '../data/hooks/useUser'
import LoginPage from '../modules/login/LoginPage'

const RootAuthPage = () => {
	const { isAuthenticated } = useAuth0()
	const { flags } = useUser()

	if (isAuthenticated) {
		if (!flags.is_registered) return <Navigate to='/registro' replace />
		else if (!flags.is_active) return <Navigate to='/cuentaNoActiva' replace />
		else if (flags.is_first_time) return <Navigate to='/tutorial' replace />
		else return <Navigate to='/actividades' replace />
	} else return <LoginPage />
}

export default RootAuthPage
