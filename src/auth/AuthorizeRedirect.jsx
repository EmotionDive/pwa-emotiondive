import { useAuth0 } from '@auth0/auth0-react'
import { Navigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import UserService from '../fetchers/UserService'
import useUser from '../data/hooks/useUser'

const AuthorizeRedirect = () => {
	const { user } = useAuth0()
	const { updateFlags } = useUser()

	const { isLoading, data, isSuccess } = useQuery('userFlags', () =>
		UserService.getAccountStatus(user.email)
	)

	if (isLoading) return <div>Redirecting...</div>

	if (isSuccess) {
		updateFlags(data)
		if (!data.is_registered) return <Navigate to='/registro' replace />
		else if (!data.is_active) return <Navigate to='/cuentaNoActiva' replace />
		else if (data.is_first_time) return <Navigate to='/tutorial' replace />
		else return <Navigate to='/' replace />
	} else {
		return <div>There was an error</div>
	}
}

export default AuthorizeRedirect
