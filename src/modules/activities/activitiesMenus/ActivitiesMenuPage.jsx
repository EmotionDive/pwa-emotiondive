import { Navigate } from 'react-router-dom'
import useActivities from '../../../data/hooks/useActivities'

const ActivitiesMenuPage = () => {
	const { competences, statusWeekPlan, flagsActivities } = useActivities()

	if (competences === null || statusWeekPlan === null)
		return <div>Loading...</div>

	if (competences.length === 0 || flagsActivities.timeForCompetences)
		return (
			<Navigate
				to='/actividades/elegirCompetencias'
				state={{ fromMenuPage: true }}
				replace
			/>
		)

	if (statusWeekPlan === 'onTime')
		return <Navigate to='/actividades/planSemanal' replace />
	else return <Navigate to='/actividades/verActividades' replace />
}

export default ActivitiesMenuPage
