import { TransparentLocalizationBar } from '../../components/LocalizationBar'
import {
	UsernameSlide,
	TermsConditionsSlide,
	DataGeneralSlide,
	NoticeEmailSlide,
} from './slides'
import { SlideSwitch, Slide } from '../../utils/Slides'
import useUser from '../../data/hooks/useUser'
import { Navigate } from 'react-router-dom'

const RegisterPage = () => {
	const { flags } = useUser()

	if (flags.is_registered) return <Navigate to='/' /> //Send to 404

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
