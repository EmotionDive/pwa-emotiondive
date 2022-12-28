import { useContext } from 'react'
import { ActivitiesContext } from '../ActivitiesProvider'

export default function useActivities() {
	const {
		competences,
		statusWeekPlan,
		weekplan,
		doneActivities,
		isLoading,
		flagsActivities,
		numberOfTest,
		fetchAll,
	} = useContext(ActivitiesContext)

	return {
		competences,
		statusWeekPlan,
		weekplan: weekplan.current,
		doneActivities,
		flagsActivities,
		numberOfTest,
		isLoading,
		updateAll: fetchAll,
	}
}
