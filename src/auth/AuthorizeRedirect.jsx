import { useAuth0 } from '@auth0/auth0-react'
import { Navigate } from 'react-router-dom'

const AuthorizeRedirect = () => {
	const { isAuthenticated } = useAuth0()

	if (isAuthenticated) return <Navigate to='/actividades' replace />
	else return <Navigate to='/' replace />
}

export default AuthorizeRedirect
