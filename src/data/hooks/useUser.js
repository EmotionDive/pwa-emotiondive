import { useAuth0 } from '@auth0/auth0-react'
import { useContext } from 'react'
import { UserContext } from '../UserProvider'

export default function useUser() {
	const { flags } = useContext(UserContext)
	const { logout: logoutFromAuth } = useAuth0()

	const updateFlags = (newFlags) => {
		flags.current = newFlags
		localStorage.setItem('flags', JSON.stringify(newFlags))
		console.log('updated flags')
	}

	const logout = () => {
		localStorage.clear()
		logoutFromAuth({
			returnTo: window.location.origin,
		})
	}

	return {
		flags: flags.current,
		updateFlags,
		logout,
	}
}
