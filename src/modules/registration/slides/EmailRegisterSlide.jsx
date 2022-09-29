import { LargeButton, TextButton } from '../../../components/Buttons'
import { Textfield } from '../../../components/Forms'
import { useSlides } from '../../../utils/Slides'

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
					<LargeButton onClick={() => slideTo('/T&Cs')}>Listo</LargeButton>
					<TextButton
						withBack={true}
						onClick={() => slideTo('/')}
						color='secondary'
					>
						Atrás
					</TextButton>
				</div>
			</section>
		</>
	)
}

export default EmailRegisterSlide
