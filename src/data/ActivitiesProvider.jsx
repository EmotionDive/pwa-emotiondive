import { createContext, useRef, useState } from 'react'
import PropTypes from 'prop-types'

export const ActivitiesContext = createContext(null)

const ActivitiesProvider = ({ children }) => {
	const [competences, setCompetences] = useState(null)
	const [statusWeekPlan, setStatusWeekPlan] = useState(null)
	const [doneActivities, setDoneActivities] = useState([])
	const weekplan = useRef({})

	return (
		<ActivitiesContext.Provider
			value={{
				competences,
				setCompetences,
				statusWeekPlan,
				setStatusWeekPlan,
				weekplan,
				doneActivities,
				setDoneActivities,
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
