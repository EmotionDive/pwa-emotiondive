import { Navigate } from 'react-router-dom'
import useActivities from '../../../data/hooks/useActivities'
import CreateWeekPlanPage from './CreateWeekPlanPage'
import ShowWeekPlanPage from './ShowWeekPlanPage'

const WeekPlanPage = () => {
	const { statusWeekPlan, flagsActivities } = useActivities()

	if (statusWeekPlan === null) return <div>Loading...</div>

	if (statusWeekPlan === 'onTime') return <ShowWeekPlanPage />

	if (flagsActivities.timeForCompetences && statusWeekPlan !== 'onTime')
		return <Navigate to='/actividades' replace />

	return <CreateWeekPlanPage />
}

export default WeekPlanPage
