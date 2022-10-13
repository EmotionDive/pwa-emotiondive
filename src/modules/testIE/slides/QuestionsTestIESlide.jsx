import { useState } from 'react'
import {
	TextButton,
	SmallButton,
	OptionButtonGroup,
	OptionButton,
} from '../../../components/Buttons'
import { ProgressBar } from '../../../components/Forms'

const QuestionsTestIESlide = () => {
	const [answerValue, setAnswerValue] = useState(null)

	return (
		<div className='appWrapper'>
			<main className='mainWrapper'>
				<ProgressBar className='testIEProgress' completed={20} />
				<div className='testIEQuestions'>
					<span className='testIEQuestions__question'>
						La mayor parte del tiempo me siento aburrido en mi trabajo.
					</span>
					<OptionButtonGroup
						wrapWith='div'
						className='testIEQuestions__answers'
						onChange={(value) => setAnswerValue(value)}
					>
						<OptionButton value='1'>Completamente falso para mí</OptionButton>
						<OptionButton value='2'>Bastante falso para mí</OptionButton>
						<OptionButton value='3'>Ni verdadero ni falso para mí</OptionButton>
						<OptionButton value='4'>Bastante verdadero para mí</OptionButton>
						<OptionButton value='5'>
							Completamente verdadero para mí
						</OptionButton>
					</OptionButtonGroup>
				</div>
			</main>
			<footer>
				<TextButton>Saltar Pregunta</TextButton>
				<SmallButton disabled={answerValue === null}>Siguiente</SmallButton>
			</footer>
		</div>
	)
}

export default QuestionsTestIESlide
