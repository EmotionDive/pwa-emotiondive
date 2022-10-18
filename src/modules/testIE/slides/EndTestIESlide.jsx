import logo from '@assets/images/logos/LogoHorizontal.png'
import image from '@assets/images/pictures/Test-Image.png'
import { LargeButton } from '../../../components/Buttons'
import { useNavigate } from 'react-router-dom'

const EndTestIESlide = () => {
	const navigate = useNavigate()

	return (
		<div className='testIEPage mainWrapper'>
			<main>
				<section className='testIEPage__end'>
					<h1>
						¡Felicidades!
						<br />
						Ya terminaste tu Test.
					</h1>
					<span className='systemText__instruction'>
						Muchas gracias por tomarte el tiempo para responder el Test.
					</span>
					<div className='image'>
						<img src={image} alt='Test' />
					</div>
					<span className='systemText__instruction'>
						¡Ya tenemos los resultados! <br />
						¿Listo para conocerlos?
					</span>
					<LargeButton
						onClick={() => navigate('/estadisticas')}
						type='outlined-lighter'
					>
						Ir a Estadísticas IE
					</LargeButton>
				</section>
			</main>
			<footer>
				<img src={logo} alt='EmotionDive' />
			</footer>
		</div>
	)
}

export default EndTestIESlide
