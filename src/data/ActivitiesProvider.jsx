import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const ActivitiesContext = createContext(null)

const ActivitiesProvider = ({ children }) => {
	const [competences, setCompetences] = useState(null)

	return (
		<ActivitiesContext.Provider
			value={{
				competences,
				setCompetences,
			}}
		>
			{children}
		</ActivitiesContext.Provider>
	)
}

ActivitiesProvider.propTypes = {
	children: PropTypes.any,
}

export default ActivitiesProvider
