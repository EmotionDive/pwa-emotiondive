import { LargeButton, TextButton } from '../../../components/Buttons'
import image from '@assets/images/pictures/Email-Image.png'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import UserService from '../../../fetchers/UserService'
import { useSlides } from '../../../utils/Slides'

const NoticeEmailSlide = () => {
	const { logout } = useAuth0()
	const { state } = useSlides()

	useEffect(() => {
		//TODO: ADD USER CONTEXT WITH FLAGS AND MAKE REDIRECTS ON PAGES
		//TODO: SEND EMAIL WITH USERSERVICE
		// UserService.sendEmail()
	}, [])

	return (
		<>
			<section className='mainWrapper__centerContent'>
				<h1 className='text--big'>Hay un correo esperando por ti...</h1>
				<span className='systemText__instruction'>
					¡Ya estas a un sólo paso de trabajar tu Inteligencia Emocional!
				</span>
				<div className='registerPage__desktopImageDistribution'>
					<div className='registerPage__image'>
						<img src={image} alt='EmailNotice' />
					</div>
					<div className='registerPage__mainContent'>
						<span className='text--small'>
							Activa tu cuenta con el correo que te hemos enviado.
						</span>
						<LargeButton
							onClick={() =>
								window.open(
									'https://mail.google.com/mail/u/0/#search/EmotionDive',
									'_blank'
								)
							}
						>
							Abrir Correo
						</LargeButton>
						<TextButton
							onClick={() => logout({ returnTo: window.location.origin })}
							color='secondary'
						>
							Ir a Inicio de Sesión
						</TextButton>
					</div>
				</div>
			</section>
		</>
	)
}

export default NoticeEmailSlide
