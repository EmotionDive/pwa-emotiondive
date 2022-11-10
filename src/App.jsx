import RegisterPage from './modules/registration/RegisterPage'
import { Routes, Route } from 'react-router-dom'
import ActivatedAccountPage from './modules/registration/ActivatedAccountPage'
import NoActivatedAccountPage from './modules/registration/NoActivatedAccountPage'
import TutorialPage from './modules/tutorial/TutorialPage'
import TestIEPage from './modules/testIE/TestIEPage'
import StatisticsPage from './modules/statistics/StatisticsPage'
import MainAppLayout from './layouts/MainAppLayout'
import ActivitiesPage from './modules/activities/ActivitiesPage'
import ConfigurationPage from './modules/configuration/ConfigurationPage'
import HelpPage from './modules/assistance/HelpPage'
import AuthorizeRedirect from './auth/AuthorizeRedirect'
import { useAuth0 } from '@auth0/auth0-react'
import AuthorizedRoutes from './auth/AuthorizedRoutes'
import RootAuthPage from './auth/RootAuthPage'

function App() {
	const { isLoading } = useAuth0()

	if (isLoading) return <div>Loading...</div>

	return (
		<Routes>
			<Route path='/' element={<RootAuthPage />} />
			<Route path='/registro' element={<RegisterPage />} />
			{/* Authorized Routes */}
			<Route element={<AuthorizedRoutes />}>
				<Route path='/authorize' element={<AuthorizeRedirect />} />
				<Route path='/tutorial' element={<TutorialPage />} />
				<Route path='/testIE' element={<TestIEPage />} />
				<Route path='/cuentaActiva' element={<ActivatedAccountPage />} />
				<Route path='/cuentaNoActiva' element={<NoActivatedAccountPage />} />
				<Route element={<MainAppLayout />}>
					<Route path='/estadisticas' element={<StatisticsPage />} />
					<Route path='/actividades' element={<ActivitiesPage />} />
					<Route path='/configuracion' element={<ConfigurationPage />} />
					<Route path='/ayuda' element={<HelpPage />} />
				</Route>
			</Route>
		</Routes>
	)
}

export default App
