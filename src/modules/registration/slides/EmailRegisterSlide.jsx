import { LargeButton, TextButton } from '../../../components/Buttons'
import { Textfield } from '../../../components/Forms'
import { useSlides } from '../../../utils/Slides'
import BackIcon from '../../../assets/icons/Back.svg?component'

const EmailRegisterSlide = () => {
	const { state, slideTo } = useSlides()
	return (
		<>
			<section className='mainWrapper__centerContent'>
				<h1 className='text--big'>Empecemos con lo más básico...</h1>
				<span className='systemText__instruction'>
					Ingresa tu correo electrónico y una contraseña:
				</span>
				<div className='registerPage__mainContent'>
					<Textfield
						label='Correo Electrónico'
						placeholder='ejemplo@mail.com'
					/>
					<Textfield label='Contraseña' placeholder='*******' />
					<Textfield label='Confirmar Contraseña' placeholder='*******' />
					<LargeButton onClick={() => slideTo('/')}>Listo</LargeButton>
					<TextButton iconSVG={<BackIcon />} onClick={() => slideTo('/')}>
						Atrás
					</TextButton>
				</div>
			</section>
		</>
	)
}

export default EmailRegisterSlide
