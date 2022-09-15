import React from 'react'
import { SocialMediaButton } from '../../components/Buttons'
import { TransparentLocalizationBar } from '../../components/LocalizationBar'

const LoginPage = () => {
	return (
		<div className='mainWrapper'>
			<TransparentLocalizationBar localization='Registro' />
			<section className='mainWrapper__centerContent'>
				<h1 className='text--big'>¿Creamos una cuenta nueva?</h1>
				<span className='systemText__instruction'>
					Elige como quieres registrarte:
				</span>
				<div className='loginPage__socialButtons'>
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
		</div>
	)
}

export default LoginPage
