import logo from '@assets/images/logos/LogoHorizontal.png'
import { useState } from 'react'
import { LargeButton, TextButton } from '../../../components/Buttons'
import { useSlides } from '../../../utils/Slides'

const StartTestIESlide = () => {
	const [inst, setInst] = useState(0)
	const { slideTo } = useSlides()

	const instructions = [
		<section key={0}>
			<h1 className='text--big'>
				¡Es hora de hacer el Test de Inteligencia Emocional!
			</h1>
			<span className='testIEPage__duration'>Duración (10-20 min)</span>
			<p>
				Te presentaremos una serie de preguntas acerca de tu forma de
				<b> pensar</b>, <b>sentir</b> y <b>ser</b>.
			</p>
			<p>
				Procura ser sincero y recuerda que <b>NO</b> existen respuestas buenas o
				malas, simplemente las respuestas que elijas son las que mejor te
				definirán.
			</p>
			<p>
				Te recomendamos contestar todas las preguntas sin distracciones. Te
				tomará alrededor de 10-20 minutos contestarlo.
			</p>
			<LargeButton type='outlined-lighter' onClick={() => setInst(1)}>
				Comenzar Test IE
			</LargeButton>
			<TextButton>Mejor en otro momento...</TextButton>
		</section>,
		<section key={1}>
			<h1 className='text--big'>
				Muy bien Sarah,
				<br /> ¡Comencemos con el Test!
			</h1>
			<p>
				De las preguntas, elige la opción que mejor se ajuste a tu manera
				habitual de <b>ser</b>, <b>pensar</b> o <b>sentir</b>.
			</p>
			<LargeButton
				type='outlined-lighter'
				onClick={() => slideTo('/questions')}
			>
				Siguiente
			</LargeButton>
		</section>,
	]

	return (
		<div className='testIEPage'>
			<main>{instructions[inst]}</main>
			<footer>
				<img src={logo} alt='EmotionDive' />
			</footer>
		</div>
	)
}

export default StartTestIESlide
