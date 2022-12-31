import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useModalAction } from '../../components/Modal'
import useActivities from '../../data/hooks/useActivities'
import { ActivitiesTabNav } from './components'

const ActivitiesLayout = () => {
	const navigate = useNavigate()
	const { competences, flagsActivities, numberOfTest, statusWeekPlan } =
		useActivities()
	const { operateModal } = useModalAction()
	const { pathname } = useLocation()

	const handleTab = (activeTab) => {
		if (activeTab === 'activities') navigate('/actividades/verActividades')
		else navigate('/actividades/planSemanal')
	}

	useEffect(() => {
		if (numberOfTest !== 2 && statusWeekPlan === 'expired') {
			operateModal(
				'¡Ya es hora de hacer tu Test IE!',
				'¡Muy bien, ya terminaste tu plan semanal de esta Beta! Veamos que tal te va al realizar este nuevo Test IE.',
				'confirm',
				['Realizar Test IE'],
				() => {
					navigate('/testIE', { state: { fromTestIE: true } })
				},
				false
			)
		}
	}, [numberOfTest, statusWeekPlan])

	return (
		<div className='activitiesPage'>
			<ActivitiesTabNav
				value={pathname.includes('planSemanal') ? 'weekPlan' : 'activities'}
				onChange={handleTab}
				disableWeekPlan={
					!competences ||
					competences.length === 0 ||
					(flagsActivities.timeForCompetences && statusWeekPlan !== 'onTime')
				}
			/>
			<div className='activitiesPage__content'>
				<Outlet />
			</div>
		</div>
	)
}

export default ActivitiesLayout
