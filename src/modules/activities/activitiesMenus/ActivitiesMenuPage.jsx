import { Navigate } from 'react-router-dom'
import useActivities from '../../../data/hooks/useActivities'

const ActivitiesMenuPage = () => {
	const { competences, statusWeekPlan } = useActivities()

	if (competences === null || statusWeekPlan === null)
		return <div>Loading...</div>

	if (competences.length === 0)
		return <Navigate to='/actividades/elegirCompetencias' replace />

	if (statusWeekPlan === 'onTime')
		return <Navigate to='/actividades/planSemanal' replace />
	else return <Navigate to='/actividades/verActividades' replace />
}

export default ActivitiesMenuPage
