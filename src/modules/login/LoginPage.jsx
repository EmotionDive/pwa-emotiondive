import logo from '@assets/images/logos/BigLogoInApp.png'
import { LargeButton, SocialMediaButton } from '../../components/Buttons'
import { Textfield } from '../../components/Forms'
import { Link } from 'react-router-dom'

const LoginPage = () => {
	return (
		<div className='mainWrapper loginPage'>
			<h1>EmotionDive</h1>
			<section className='loginPage__image'>
				<img src={logo} alt='EmotionDive Logo' />
			</section>
			<section className='loginPage__mainContent'>
				{/* LOGIN FORM */}
				<form className='loginPage__optionsContainer'>
					<Textfield
						label='Correo Electrónico'
						placeholder='ejemplo@mail.com'
					/>
					<Textfield label='Contraseña' placeholder='*******' />
					<LargeButton>Iniciar Sesión</LargeButton>
				</form>
				<div className='loginPage__orLine'>
					<hr />
					<span>ó</span>
					<hr />
				</div>
				{/* SECOND AUTH TYPE */}
				<div className='loginPage__optionsContainer'>
					<SocialMediaButton social='Facebook' actionType='continue' />
					<SocialMediaButton social='Google' actionType='continue' />
				</div>
			</section>
			<section className='mainWrapper__bottom link link--secondary'>
				<span>¿Sin cuenta?</span>
				<span>
					<Link to='/registro'>
						Regístrate <u>aquí</u>
					</Link>
				</span>
			</section>
		</div>
	)
}

export default LoginPage
