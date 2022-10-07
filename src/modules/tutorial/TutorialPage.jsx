import AnimatedGradient from '../../components/Gradients/AnimatedGradient'
import logo from '../../assets/images/logos/LogoHorizontal.png'

const TutorialPage = () => {
	return (
		<AnimatedGradient>
			<div className='tutorialPage'>
				<main>
					<span>¡Hola Sarah!</span>
				</main>
				<footer>
					<img src={logo} alt='EmotionDive'></img>
				</footer>
			</div>
		</AnimatedGradient>
	)
}

export default TutorialPage
