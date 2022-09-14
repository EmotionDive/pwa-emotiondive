import React from 'react'
import { TransparentLocalizationBar } from '../../components/LocalizationBar'

const LoginPage = () => {
	return (
		<div className='mainWrapper'>
			<TransparentLocalizationBar localization='Registro' />
			<h1 className='text--big'>¿Creamos una cuenta nueva?</h1>
			<span className='systemText__instruction'>
				Elige como quieres registrarte:
			</span>
		</div>
	)
}

export default LoginPage
