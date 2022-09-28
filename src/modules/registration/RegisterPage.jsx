// import { useState } from 'react'
import { TransparentLocalizationBar } from '../../components/LocalizationBar'
import { EmailRegisterSlide, RegisterUserSlide } from './slides'
import { SlideSwitch, Slide } from '../../utils/Slides'
import TermsConditionsSlide from './slides/TermsConditionsSlide'

const RegisterPage = () => {
	return (
		<div className='mainWrapper'>
			<TransparentLocalizationBar localization='Registro' />
			<SlideSwitch>
				<Slide path='/' element={<RegisterUserSlide />} />
				<Slide path='/email' element={<EmailRegisterSlide />} />
				<Slide path='/T&Cs' element={<TermsConditionsSlide />} />
			</SlideSwitch>
		</div>
	)
}

export default RegisterPage
