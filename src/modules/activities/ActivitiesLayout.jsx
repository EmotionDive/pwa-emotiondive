import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useModalAction } from '../../components/Modal'
import useActivities from '../../data/hooks/useActivities'
import { ActivitiesTabNav } from './components'

const ActivitiesLayout = () => {
	const navigate = useNavigate()
	const { competences, flagsActivities, numberOfTest } = useActivities()
	const { operateModal } = useModalAction()
	const { pathname } = useLocation()

	const handleTab = (activeTab) => {
		if (activeTab === 'activities') navigate('/actividades/verActividades')
		else navigate('/actividades/planSemanal')
	}

	useEffect(() => {
		if (flagsActivities.testReady && numberOfTest !== 2) {
			operateModal(
				'¡Ya es hora de hacer tu Test IE!',
				'¡Muy bien, terminaste todas las actividades de las competencias que elegiste! Ahora, toca ver cómo se encuentra tu Inteligencia Emocional y después volverás a elegir que competencias deseas desarrollar.',
				'confirm',
				['Realizar Test IE'],
				() => {
					navigate('/testIE', { state: { fromTestIE: true } })
				},
				false
			)
		}
	}, [flagsActivities.testReady])

	return (
		<div className='activitiesPage'>
			<ActivitiesTabNav
				value={pathname.includes('planSemanal') ? 'weekPlan' : 'activities'}
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
