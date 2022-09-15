import { SocialMediaButton } from '@/components/Buttons'

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
					<SocialMediaButton social='Email' />
				</div>
			</section>
			<section className='mainWrapper__bottom link'>
				<span>¿Ya tienes una cuenta?</span>
				<span>
					Inicia sesión <u>aquí</u>
				</span>
			</section>
		</>
	)
}

export default RegisterUserSlide
