import AnimatedGradient from '../../components/Gradients/AnimatedGradient'
import logo from '../../assets/images/logos/LogoHorizontal.png'
import { LargeButton } from '../../components/Buttons'
import { useNavigate } from 'react-router-dom'

const TutorialPage = () => {
	const navigate = useNavigate()

	return (
		<AnimatedGradient>
			<div className='tutorialPage'>
				<main>
					<span>¡Hola Sarah!</span>
					<LargeButton
						onClick={() => navigate('/testIE', { state: { fromTestIE: true } })}
					>
						Hacer Test IE
					</LargeButton>
				</main>
				<footer>
					<img src={logo} alt='EmotionDive'></img>
				</footer>
			</div>
		</AnimatedGradient>
	)
}

export default TutorialPage
