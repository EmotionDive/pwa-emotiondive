import { Navigate } from 'react-router-dom'
import useActivities from '../../../data/hooks/useActivities'

const ActivitiesMenuPage = () => {
	const { competences } = useActivities()

	if (competences === null) return <div>Loading...</div>

	if (competences.length === 0)
		return <Navigate to='/actividades/elegirCompetencias' replace />
	else return <Navigate to='/actividades/verActividades' replace />
}

export default ActivitiesMenuPage
