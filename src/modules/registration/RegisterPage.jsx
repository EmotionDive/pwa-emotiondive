import { TransparentLocalizationBar } from '../../components/LocalizationBar'
import {
	EmailRegisterSlide,
	RegisterUserSlide,
	UsernameSlide,
	TermsConditionsSlide,
	DataGeneralSlide,
	NoticeEmailSlide,
} from './slides'
import { SlideSwitch, Slide } from '../../utils/Slides'

const RegisterPage = () => {
	return (
		<div className='mainWrapper'>
			<TransparentLocalizationBar localization='Registro' />
			<SlideSwitch>
				<Slide path='/' element={<RegisterUserSlide />} />
				<Slide path='/email' element={<EmailRegisterSlide />} />
				<Slide path='/T&Cs' element={<TermsConditionsSlide />} />
				<Slide path='/username' element={<UsernameSlide />} />
				<Slide path='/dataGeneral' element={<DataGeneralSlide />} />
				<Slide path='/noticeEmail' element={<NoticeEmailSlide />} />
			</SlideSwitch>
		</div>
	)
}

export default RegisterPage
