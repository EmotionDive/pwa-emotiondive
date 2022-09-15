import { TransparentLocalizationBar } from '../../components/LocalizationBar'
import { RegisterUserSlide } from './slides'

const RegisterPage = () => {
	return (
		<div className='mainWrapper'>
			<TransparentLocalizationBar localization='Registro' />
			<RegisterUserSlide />
			{/* TODO: MemoryRouter slides */}
		</div>
	)
}

export default RegisterPage
