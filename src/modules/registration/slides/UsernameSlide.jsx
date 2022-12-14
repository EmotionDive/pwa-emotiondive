import { LargeButton, TextButton } from '../../../components/Buttons'
import { Textfield } from '../../../components/Forms'
import { useSlides } from '../../../utils/Slides'
import image from '@assets/images/pictures/User-Image.png'
import { useRef, useState } from 'react'
import UserService from '../../../fetchers/UserService'

// prettier-ignore
const validCaracters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n'
						,'o','p','q','r','s','t','u','v','w','x','y','z',
						'A','B','C','D','E','F','G','H','I','J','K','L','M','N'
						,'O','P','Q','R','S','T','U','V','W','X','Y','Z',
						'0','1','2','3','4','5','6','7','8','9','_','-','Backspace']

const UsernameSlide = () => {
	const { slideTo, state, setState } = useSlides()
	const username = useRef()
	const [error, setError] = useState('')

	const handleOnClick = () => {
		if (username.current.value === '') {
			setError('Escribe un nombre de usuario')
		} else {
			UserService.verifyUsernameAvailability(username.current.value)
				.then((response) => {
					if (response.status === 'success') {
						if (response.username_state === 'available') {
							setState((prev) => ({
								...prev,
								username: username.current.value,
							}))
							slideTo('/dataGeneral')
						} else {
							setError(`${username.current.value} ya esta ocupado`)
						}
					} else {
						alert('Error en el servidor')
					}
				})
				.catch((error) => {
					console.error(error)
					alert('Error en el servidor')
				})
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
							onKeyDown={(e) => {
								if (!validCaracters.includes(e.key)) e.preventDefault()
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
