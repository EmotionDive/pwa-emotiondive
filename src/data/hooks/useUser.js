import { useAuth0 } from '@auth0/auth0-react'
import { useContext } from 'react'
import { UserContext } from '../UserProvider'

export default function useUser() {
	const { flags, userData, setFlags, setUserData } = useContext(UserContext)
	const { logout: logoutFromAuth } = useAuth0()

	const updateFlags = (newFlags) => {
		setFlags(newFlags)
		localStorage.setItem('flags', JSON.stringify(newFlags))
		console.log('updated flags')
	}

	const updateUserData = (newData) => {
		setUserData(newData)
		localStorage.setItem('user', JSON.stringify(newData))
		console.log('updated user')
	}

	const logout = () => {
		localStorage.clear()
		logoutFromAuth({
			returnTo: window.location.origin,
		})
	}

	return {
		flags,
		userData,
		updateFlags,
		updateUserData,
		logout,
	}
}
