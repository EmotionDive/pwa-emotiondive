import RegisterPage from './modules/registration/RegisterPage'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './modules/login/LoginPage'

function App() {
	return (
		<Routes>
			<Route path='/' element={<LoginPage />} />
			<Route path='/registro' element={<RegisterPage />} />
		</Routes>
	)
}

export default App
