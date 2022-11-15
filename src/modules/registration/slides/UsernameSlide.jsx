import { LargeButton, TextButton } from '../../../components/Buttons'
import { Textfield } from '../../../components/Forms'
import { useSlides } from '../../../utils/Slides'
import image from '@assets/images/pictures/User-Image.png'
import { useRef, useState } from 'react'

const UsernameSlide = () => {
	const { slideTo, state, setState } = useSlides()
	const username = useRef()
	const [error, setError] = useState('')

	const handleOnClick = () => {
		if (username.current.value === '') {
			setError('Escribe un nombre de usuario')
		} else {
			setState((prev) => ({ ...prev, username: username.current.value }))
			slideTo('/dataGeneral')
		}
	}

	return (
		<>
			<section className='mainWrapper__centerContent registerPage__top'>
				<h1 className='text--big'>¿Cómo te gustaría que te llamáramos?</h1>
				<span className='systemText__instruction'>
					Escribe un nombre de usuario:
				</span>
				<div className='registerPage__desktopImageDistribution'>
					<div className='registerPage__image'>
						<img src={image} alt='User' />
					</div>
					<div className='registerPage__mainContent'>
						<Textfield
							label='Nombre de usuario'
							placeholder='Usuario123'
							innerRef={username}
							defaultValue={state?.username}
							onChange={() => {
								if (error) setError('')
							}}
							error={error}
						/>
						<span className='text--small'>
							Dando click en “Continuar”, aceptas nuestros Términos &
							Condiciones.
						</span>
						<LargeButton onClick={handleOnClick}>Continuar</LargeButton>
						<TextButton
							withBack={true}
							onClick={() => slideTo('/')}
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
