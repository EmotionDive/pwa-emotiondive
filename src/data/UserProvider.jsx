import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const UserContext = createContext(null)

const UserProvider = ({ children }) => {
	const [flags, setFlags] = useState(JSON.parse(localStorage.getItem('flags')))
	const [userData, setUserData] = useState(
		JSON.parse(localStorage.getItem('user'))
	)

	return (
		<UserContext.Provider
			value={{
				flags,
				userData,
				setFlags,
				setUserData,
			}}
		>
			{children}
		</UserContext.Provider>
	)
}

UserProvider.propTypes = {
	children: PropTypes.any,
}

export default UserProvider
