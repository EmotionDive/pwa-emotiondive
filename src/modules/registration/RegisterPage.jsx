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
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import UserService from '../../fetchers/UserService'

const RegisterPage = () => {
	const { flags, updateFlags } = useUser()
	const { user } = useAuth0()

	useEffect(() => {
		UserService.getAccountStatus(user.email).then((res) => {
			updateFlags(res)
		})
	}, [])

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
