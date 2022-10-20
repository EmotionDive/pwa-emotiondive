import RegisterPage from './modules/registration/RegisterPage'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './modules/login/LoginPage'
import ActivatedAccountPage from './modules/registration/ActivatedAccountPage'
import NoActivatedAccountPage from './modules/registration/NoActivatedAccountPage'
import TutorialPage from './modules/tutorial/TutorialPage'
import TestIEPage from './modules/testIE/TestIEPage'
import StatisticsPage from './modules/statistics/StatisticsPage'
import MainAppLayout from './layouts/MainAppLayout'
import ActivitiesPage from './modules/activities/ActivitiesPage'
import ConfigurationPage from './modules/configuration/ConfigurationPage'
import HelpPage from './modules/assistance/HelpPage'

function App() {
	return (
		<Routes>
			<Route path='/' element={<LoginPage />} />
			<Route path='/registro' element={<RegisterPage />} />
			<Route path='/cuentaActiva' element={<ActivatedAccountPage />} />
			<Route path='/cuentaNoActiva' element={<NoActivatedAccountPage />} />
			<Route path='/tutorial' element={<TutorialPage />} />
			<Route path='/testIE' element={<TestIEPage />} />
			<Route element={<MainAppLayout />}>
				<Route path='/estadisticas' element={<StatisticsPage />} />
				<Route path='/actividades' element={<ActivitiesPage />} />
				<Route path='/configuracion' element={<ConfigurationPage />} />
				<Route path='/ayuda' element={<HelpPage />} />
			</Route>
		</Routes>
	)
}

export default App
