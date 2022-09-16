import { SocialMediaButton } from '@/components/Buttons'
import { Link } from 'react-router-dom'

const RegisterUserSlide = () => {
	return (
		<>
			<section className='mainWrapper__centerContent'>
				<h1 className='text--big'>¿Creamos una cuenta nueva?</h1>
				<span className='systemText__instruction'>
					Elige como quieres registrarte:
				</span>
				<div className='registerPage__socialButtons'>
					<SocialMediaButton social='Google' actionType='register' />
					<SocialMediaButton social='Facebook' actionType='register' />
					<SocialMediaButton social='Email' actionType='register' />
				</div>
			</section>
			<section className='mainWrapper__bottom link'>
				<span>¿Ya tienes una cuenta?</span>
				<Link to='/registro'>
					Inicia sesión <u>aquí</u>
				</Link>
			</section>
		</>
	)
}

export default RegisterUserSlide
