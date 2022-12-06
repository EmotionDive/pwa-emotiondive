import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import useActivities from '../../data/hooks/useActivities'
import { ActivitiesTabNav } from './components'

const ActivitiesLayout = () => {
	const navigate = useNavigate()
	const { competences } = useActivities()

	const handleTab = (activeTab) => {
		if (activeTab === 'activities') navigate('/actividades')
		else navigate('/actividades/planSemanal')
	}

	return (
		<div className='activitiesPage'>
			<ActivitiesTabNav
				value={
					useLocation().pathname.includes('planSemanal')
						? 'weekPlan'
						: 'activities'
				}
				onChange={handleTab}
				disableWeekPlan={!competences || competences.length === 0}
			/>
			<div className='activitiesPage__content'>
				<Outlet />
			</div>
		</div>
	)
}

export default ActivitiesLayout
