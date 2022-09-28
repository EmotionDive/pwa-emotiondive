// import { useState } from 'react'
import { TransparentLocalizationBar } from '../../components/LocalizationBar'
import { EmailRegisterSlide, RegisterUserSlide } from './slides'
import { SlideSwitch, Slide } from '../../utils/Slides'

const RegisterPage = () => {
	return (
		<div className='mainWrapper'>
			<TransparentLocalizationBar localization='Registro' />
			<SlideSwitch>
				<Slide path='/' element={<RegisterUserSlide />} />
				<Slide path='/email' element={<EmailRegisterSlide />} />
			</SlideSwitch>
		</div>
	)
}

export default RegisterPage
