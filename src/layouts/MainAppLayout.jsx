import { useAuth0 } from '@auth0/auth0-react'
import { Outlet, useLocation } from 'react-router-dom'
import { BackgroundLocalizationBar } from '../components/LocalizationBar'
import { ModalAction, ModalProvider } from '../components/Modal'
import { BottomBar } from '../components/Navigation'

const localizations = {
	'/estadisticas': 'Estadísticas IE',
	'/actividades': 'Actividades IE',
	'/configuracion': 'Configuración',
	'/ayuda': 'Ayuda',
}

const MainAppLayout = () => {
	const { user, isAuthenticated } = useAuth0()

	console.log('isAuthenticated: ' + isAuthenticated)
	console.log(user?.email)

	return (
		<div className='appWrapper'>
			<BackgroundLocalizationBar
				localization={localizations[useLocation().pathname]}
			/>
			<ModalProvider>
				<main>
					<Outlet />
					<ModalAction />
				</main>
			</ModalProvider>
			<BottomBar />
		</div>
	)
}

export default MainAppLayout
