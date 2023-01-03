import { useNavigate } from 'react-router-dom'
import logo from '@assets/images/logos/BigLogoInApp.png'
import { LargeButton, SocialMediaButton } from '../../components/Buttons'
import { Textfield } from '../../components/Forms'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const LoginPage = () => {
	const { loginWithRedirect } = useAuth0()

	return (
		<div className='mainWrapper loginPage mainWrapper__fullHeight'>
			<h1>EmotionDive</h1>
			<section className='loginPage__image'>
				<img src={logo} alt='EmotionDive Logo' />
			</section>
			<section className='loginPage__mainContent'>
				<div className='loginPage__optionsContainer'>
					<LargeButton onClick={() => loginWithRedirect({ ui_locales: 'es' })}>
						Iniciar Sesión
					</LargeButton>
				</div>
				<div className='loginPage__orLine'>
					<hr />
					<span>ó</span>
					<hr />
				</div>
				{/* SECOND AUTH TYPE */}
				<div className='loginPage__optionsContainer'>
					<LargeButton
						onClick={() =>
							loginWithRedirect({
								ui_locales: 'es',
								screen_hint: 'signup',
							})
						}
					>
						Registrate
					</LargeButton>
				</div>
			</section>
			{/* <section className='mainWrapper__bottom link link--secondary'>
				<span>¿Sin cuenta?</span>
				<span>
					<Link to='/registro'>
						Regístrate <u>aquí</u>
					</Link>
				</span>
			</section> */}
		</div>
	)
}

export default LoginPage
