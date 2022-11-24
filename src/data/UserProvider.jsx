import { createContext, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

export const UserContext = createContext(null)

const UserProvider = ({ children }) => {
	const flags = useRef(JSON.parse(localStorage.getItem('flags')))
	const userData = useRef(JSON.parse(localStorage.getItem('user')))

	return (
		<UserContext.Provider
			value={{
				flags,
				userData,
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
