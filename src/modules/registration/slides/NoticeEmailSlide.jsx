import { LargeButton, TextButton } from '../../../components/Buttons'
import image from '@assets/images/pictures/Email-Image.png'
import { useEffect } from 'react'
import UserService from '../../../fetchers/UserService'
import { useSlides } from '../../../utils/Slides'
import useUser from '../../../data/hooks/useUser'

const NoticeEmailSlide = () => {
	const { logout, flags, updateFlags } = useUser()
	const { state } = useSlides()

	useEffect(() => {
		window.addEventListener('beforeunload', logout)

		return () => {
			window.removeEventListener('beforeunload', logout)
		}
	}, [])

	useEffect(() => {
		UserService.sendEmail(state.username)
			.then((response) => {
				if (response.status !== 'success')
					console.error(
						`No se pudo enviar el correo: ${JSON.parse(response.message)}`
					)
			})
			.catch((error) => {
				console.error(error)
			})
		flags.is_registered = true
		updateFlags(flags)
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
						<TextButton onClick={() => logout()} color='secondary'>
							Ir a Inicio de Sesión
						</TextButton>
					</div>
				</div>
			</section>
		</>
	)
}

export default NoticeEmailSlide
