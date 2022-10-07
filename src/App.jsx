import RegisterPage from './modules/registration/RegisterPage'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './modules/login/LoginPage'
import ActivatedAccountPage from './modules/registration/ActivatedAccountPage'
import NoActivatedAccountPage from './modules/registration/NoActivatedAccountPage'
import TutorialPage from './modules/tutorial/TutorialPage'

function App() {
	return (
		<Routes>
			<Route path='/' element={<LoginPage />} />
			<Route path='/registro' element={<RegisterPage />} />
			<Route path='/cuentaActiva' element={<ActivatedAccountPage />} />
			<Route path='/cuentaNoActiva' element={<NoActivatedAccountPage />} />
			<Route path='/tutorial' element={<TutorialPage />} />
		</Routes>
	)
}

export default App
