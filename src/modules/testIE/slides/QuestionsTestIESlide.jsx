import { useEffect, useMemo, useRef, useState } from 'react'
import {
	TextButton,
	SmallButton,
	OptionButtonGroup,
	OptionButton,
} from '../../../components/Buttons'
import { ProgressBar } from '../../../components/Forms'

import questions from '../../../assets/data/testIE.json'

const QuestionsTestIESlide = () => {
	const answers = useRef([...Array(questions.length)])

	const [answered, setAnswered] = useState(0)
	const [isFinalQuestion, setIsFinalQuestion] = useState(false)

	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [currentAnswer, setCurrentAnswer] = useState(null)

	const progress = useMemo(() => {
		return Math.floor((answered * 100) / questions.length)
	}, [answered])

	useEffect(() => {
		const boolean = answered >= questions.length - 1
		setIsFinalQuestion(boolean)
	}, [answered])

	const saveAnswer = () => {
		answers.current[currentQuestion] = currentAnswer
	}

	const next = () => {
		setAnswered((prev) => prev + 1)
		saveAnswer()
		setCurrentAnswer(null)
		setCurrentQuestion((prev) => prev + 1)
	}

	const finishTest = () => {
		saveAnswer()
		console.log('Finished ' + answered)
		alert('Terminaste el Test')
		console.log(answers.current)
	}

	return (
		<div className='appWrapper'>
			<main className='mainWrapper testIEPage__scroll'>
				<ProgressBar className='testIEProgress' completed={progress} />
				<div className='testIEQuestions'>
					<span className='testIEQuestions__question'>
						{questions[currentQuestion]}
					</span>
					<OptionButtonGroup
						wrapWith='div'
						className='testIEQuestions__answers'
						onChange={(value) => setCurrentAnswer(value)}
						value={currentAnswer}
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
				<SmallButton
					disabled={currentAnswer === null}
					onClick={isFinalQuestion ? finishTest : next}
				>
					{isFinalQuestion ? 'Terminar' : 'Siguiente'}
				</SmallButton>
			</footer>
		</div>
	)
}

export default QuestionsTestIESlide
