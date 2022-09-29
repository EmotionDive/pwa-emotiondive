import { useNavigate } from 'react-router-dom'
import { LargeButton, TextButton } from '../../../components/Buttons'
import image from '@assets/images/pictures/Email-Image.png'

const NoticeEmailSlide = () => {
	const navigate = useNavigate()

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
						<LargeButton>Abrir Correo</LargeButton>
						<TextButton withBack={true} onClick={() => navigate('/')}>
							Ir a Inicio de Sesión
						</TextButton>
					</div>
				</div>
			</section>
		</>
	)
}

export default NoticeEmailSlide
