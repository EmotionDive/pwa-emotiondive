import { useContext } from 'react'
import { UserContext } from '../UserProvider'

export default function useUser() {
	const { flags } = useContext(UserContext)

	const updateFlags = (newFlags) => {
		flags.current = newFlags
		localStorage.setItem('flags', JSON.stringify(newFlags))
		console.log('updated flags')
	}

	return {
		flags,
		updateFlags,
	}
}
