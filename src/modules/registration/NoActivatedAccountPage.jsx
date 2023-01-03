import { LargeButton, TextButton } from '../../components/Buttons'
import { TransparentLocalizationBar } from '../../components/LocalizationBar'
import image from '@assets/images/pictures/NoActive-Image.png'
import { useEffect, useState } from 'react'
import useUser from '../../data/hooks/useUser'
import UserService from '../../fetchers/UserService'
import { Navigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const NoActivatedAccountPage = () => {
	const { user } = useAuth0()
	const [disable, setDisable] = useState(false)
	const { logout, flags } = useUser()

	useEffect(() => {
		window.addEventListener('beforeunload', logout)

		return () => {
			window.removeEventListener('beforeunload', logout)
		}
	}, [])

	if (flags.is_active) return <Navigate to='/' replace />

	return (
		<div className='mainWrapper mainWrapper__fullHeight'>
			<TransparentLocalizationBar localization='Registro' />
			<section className='mainWrapper__centerContent'>
				<h1 className='text--big'>
					Oops! Parece que te has saltado un paso...
				</h1>
				<span className='systemText__instruction'>
					Para empezar a trabajar tu Inteligencia Emocional debes activar tu
					cuenta.
				</span>
				<div className='registerPage__desktopImageDistribution'>
					<div className='registerPage__image'>
						<img src={image} alt='Cuenta No Activa' />
					</div>
					<div className='registerPage__mainContent'>
						<span className='text--small'>
							Para activar tu cuenta ingresa a tu correo electrónico y busca el
							correo que te hemos enviado.
						</span>
						<LargeButton
							disabled={disable}
							onClick={() => {
								setDisable(true)
								UserService.sendEmail(user.email)
									.then((response) => {
										if (response.status !== 'success')
											console.error(
												`No se pudo enviar el correo: ${JSON.parse(
													response.message
												)}`
											)
										else
											window.open(
												'https://mail.google.com/mail/u/0/#search/EmotionDive',
												'_blank'
											)
									})
									.catch((error) => {
										console.error(error)
									})
									.finally(() => {
										setDisable(false)
										logout()
									})
							}}
						>
							Reenviar y abrir correo
						</LargeButton>
						<TextButton
							color='secondary'
							withBack={true}
							onClick={() => {
								logout()
							}}
						>
							Regresar a Inicio de Sesión
						</TextButton>
					</div>
				</div>
			</section>
		</div>
	)
}

export default NoActivatedAccountPage
