// import { useState } from 'react'
import { TransparentLocalizationBar } from '../../components/LocalizationBar'
import {
	EmailRegisterSlide,
	RegisterUserSlide,
	UsernameSlide,
	TermsConditionsSlide,
	DataGeneralSlide,
} from './slides'
import { SlideSwitch, Slide } from '../../utils/Slides'

const RegisterPage = () => {
	return (
		<div className='mainWrapper'>
			<TransparentLocalizationBar localization='Registro' />
			<SlideSwitch>
				{/* <Slide path='/' element={<RegisterUserSlide />} />
				<Slide path='/email' element={<EmailRegisterSlide />} />
				<Slide path='/T&Cs' element={<TermsConditionsSlide />} />
				<Slide path='/username' element={<UsernameSlide />} /> */}
				<Slide path='/' element={<DataGeneralSlide />} />
			</SlideSwitch>
		</div>
	)
}

export default RegisterPage
