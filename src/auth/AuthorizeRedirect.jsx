import { useAuth0 } from '@auth0/auth0-react'
import { Navigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import UserService from '../fetchers/UserService'
import useUser from '../data/hooks/useUser'
import { useEffect } from 'react'

const AuthorizeRedirect = () => {
	const { user } = useAuth0()
	const { updateFlags, updateUserData } = useUser()

	const { isLoading, data, isSuccess } = useQuery('userFlags', () =>
		UserService.getAccountStatus(user.email)
	)

	const {
		isLoading: isLoadingUser,
		data: dataUser,
		isSuccess: isSuccessUser,
	} = useQuery('userData', () => UserService.getUserData(user.email))

	useEffect(() => {
		if (isSuccess && isSuccessUser) {
			updateFlags(data)
			updateUserData(dataUser)
		}
	}, [data, dataUser, isSuccess, isSuccessUser, updateFlags, updateUserData])

	if (isLoading || isLoadingUser) return <div>Redirecting...</div>

	if (isSuccess && isSuccessUser) {
		if (!data.is_registered) return <Navigate to='/registro' replace />
		else if (!data.is_active) return <Navigate to='/cuentaNoActiva' replace />
		else if (data.is_first_time) return <Navigate to='/tutorial' replace />
		else return <Navigate to='/' replace />
	} else {
		return <div>There was an error</div>
	}
}

export default AuthorizeRedirect
