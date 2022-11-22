import { createContext, useRef } from 'react'
import PropTypes from 'prop-types'

export const UserContext = createContext(null)

const UserProvider = ({ children }) => {
	const flags = useRef(JSON.parse(localStorage.getItem('flags')))

	return (
		<UserContext.Provider
			value={{
				flags,
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
