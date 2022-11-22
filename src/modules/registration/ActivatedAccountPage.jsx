import { useNavigate, useSearchParams } from 'react-router-dom'
import { LargeButton } from '../../components/Buttons'
import { TransparentLocalizationBar } from '../../components/LocalizationBar'
import image from '@assets/images/pictures/Activated-Image.png'
import { useEffect, useState } from 'react'
const ActivatedAccountPage = () => {
	const navigate = useNavigate()
	const [searchParams] = useSearchParams()
	const [showInterface, setShowInterface] = useState(false)

	useEffect(() => {
		const code = searchParams.get('code')

		if (!code) {
			navigate('/')
		} else {
			console.log(code)
			//TODO: ENDPOINT VERIFY MAIL
			setShowInterface(true)
		}
	}, [navigate, searchParams])

	if (!showInterface) return null
	else
		return (
			<div className='mainWrapper mainWrapper__fullHeight'>
				<TransparentLocalizationBar localization='Registro' />
				<section className='mainWrapper__centerContent'>
					<h1 className='text--big'>¡Todo listo para empezar!</h1>
					<span className='systemText__instruction'>
						¡Felicidades! has activado con éxito tu cuenta.
					</span>
					<div className='registerPage__desktopImageDistribution'>
						<div className='registerPage__image'>
							<img src={image} alt='Cuenta Activa' />
						</div>
						<div className='registerPage__mainContent'>
							<span className='text--small'>
								Inicia sesión para empezar a trabajar tu Inteligencia Emocional.
							</span>
							<LargeButton onClick={() => navigate('/')}>
								Ir a Inicio de Sesión
							</LargeButton>
						</div>
					</div>
				</section>
			</div>
		)
}

export default ActivatedAccountPage
