import { LargeButton, TextButton } from '../../components/Buttons'
import { TransparentLocalizationBar } from '../../components/LocalizationBar'
import image from '@assets/images/pictures/NoActive-Image.png'
import { useEffect } from 'react'
import useUser from '../../data/hooks/useUser'

const NoActivatedAccountPage = () => {
	const { logout } = useUser()

	useEffect(() => {
		window.addEventListener('beforeunload', logout)

		return () => {
			window.removeEventListener('beforeunload', logout)
		}
	}, [])

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
