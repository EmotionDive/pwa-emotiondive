import { useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { BackgroundLocalizationBar } from '../components/LocalizationBar'
import { ModalAction, ModalProvider } from '../components/Modal'
import { BottomBar } from '../components/Navigation'
import useActivities from '../data/hooks/useActivities'
import useUser from '../data/hooks/useUser'

const localizations = {
	'/estadisticas': 'Estadísticas IE',
	'/actividades': 'Actividades IE',
	'/actividades/planSemanal': 'Plan Semanal',
	'/configuracion': 'Configuración',
	'/ayuda': 'Ayuda',
}

const MainAppLayout = () => {
	const { flags, logout } = useUser()
	const { updateAll } = useActivities()
	const local = useLocation()

	if (flags === null) logout()

	useEffect(() => {
		updateAll()
	}, [])

	if (!flags.is_registered) return <Navigate to='/registro' replace />
	else if (!flags.is_active) return <Navigate to='/cuentaNoActiva' replace />
	else if (flags.is_first_time) return <Navigate to='/tutorial' replace />
	else
		return (
			<ModalProvider>
				<div className='appWrapper'>
					<BackgroundLocalizationBar
						localization={localizations[local.pathname] || 'Actividades IE'}
					/>
					<main>
						<Outlet />
						<ModalAction />
					</main>
					<BottomBar />
				</div>
			</ModalProvider>
		)
}

export default MainAppLayout
