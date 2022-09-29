import { LargeButton, TextButton } from '../../../components/Buttons'
import { Textfield } from '../../../components/Forms'
import { useSlides } from '../../../utils/Slides'
import image from '@assets/images/pictures/User-Image.png'

const UsernameSlide = () => {
	const { slideTo } = useSlides()

	return (
		<>
			<section className='mainWrapper__centerContent registerPage__top'>
				<h1 className='text--big'>¿Cómo te gustaría que te llamaramos?</h1>
				<span className='systemText__instruction'>
					Escribe un nombre de usuario:
				</span>
				<div className='registerPage__desktopImageDistribution'>
					<div className='registerPage__image'>
						<img src={image} alt='User' />
					</div>
					<div className='registerPage__mainContent'>
						<Textfield label='Nombre de usuario' placeholder='Usuario123' />
						<span className='text--small'>
							Dando click en “Continuar”, aceptas nuestros Términos &
							Condiciones.
						</span>
						<LargeButton onClick={() => slideTo('/dataGeneral')}>
							Continuar
						</LargeButton>
						<TextButton
							withBack={true}
							onClick={() => slideTo('/T&Cs')}
							color='secondary'
						>
							Atrás
						</TextButton>
					</div>
				</div>
			</section>
		</>
	)
}

export default UsernameSlide
