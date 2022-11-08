import { useAuth0 } from '@auth0/auth0-react'
import { Navigate, Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'

const AuthorizedRoutes = ({ children }) => {
	const { isAuthenticated } = useAuth0()

	if (!isAuthenticated) return <Navigate to='/' />

	return children ? children : <Outlet />
}

AuthorizedRoutes.propTypes = {
	children: PropTypes.any,
}

export default AuthorizedRoutes
