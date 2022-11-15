import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { ActivitiesTabNav } from './components'

const ActivitiesLayout = () => {
	const navigate = useNavigate()

	const handleTab = (activeTab) => {
		if (activeTab === 'activities') navigate('/actividades')
		else navigate('/actividades/planSemanal')
	}

	// TODO: Build "CU009: Ver Actividades TCC" and "CU011: Ver Actividad TCC"

	return (
		<div className='activitiesPage'>
			<ActivitiesTabNav
				value={
					useLocation().pathname.includes('planSemanal')
						? 'weekPlan'
						: 'activities'
				}
				onChange={handleTab}
			/>
			<div className='activitiesPage__content'>
				<Outlet />
			</div>
		</div>
	)
}

export default ActivitiesLayout
