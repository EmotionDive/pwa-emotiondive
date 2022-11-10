import { TransparentLocalizationBar } from '../../components/LocalizationBar'
import {
	UsernameSlide,
	TermsConditionsSlide,
	DataGeneralSlide,
	NoticeEmailSlide,
} from './slides'
import { SlideSwitch, Slide } from '../../utils/Slides'

const RegisterPage = () => {
	return (
		<div className='mainWrapper mainWrapper__fullHeight'>
			<TransparentLocalizationBar localization='Registro' />
			<SlideSwitch>
				<Slide path='/' element={<TermsConditionsSlide />} />
				<Slide path='/username' element={<UsernameSlide />} />
				<Slide path='/dataGeneral' element={<DataGeneralSlide />} />
				<Slide path='/noticeEmail' element={<NoticeEmailSlide />} />
			</SlideSwitch>
		</div>
	)
}

export default RegisterPage
