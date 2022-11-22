import { useEffect, useMemo, useRef, useState } from 'react'
import {
	TextButton,
	SmallButton,
	OptionButtonGroup,
	OptionButton,
} from '../../../components/Buttons'
import { ProgressBar } from '../../../components/Forms'

import questions from '../../../assets/data/testIE.json'
import { useSlides } from '../../../utils/Slides'

const QuestionsTestIESlide = () => {
	// Save all answers on a ref
	const answers = useRef([...Array(questions.length)])
	// State of the current answer of the current question.
	const [currentAnswer, setCurrentAnswer] = useState(null)
	// Questions left to answer
	const [toAnswer, setToAnswer] = useState([...Array(questions.length).keys()])
	// Boolean in order to see if it is the last question
	const [isFinalQuestion, setIsFinalQuestion] = useState(false)

	const { slideTo } = useSlides()

	const progress = useMemo(() => {
		return Math.floor(
			((questions.length - toAnswer.length) * 100) / questions.length
		)
	}, [toAnswer.length])

	useEffect(() => {
		setIsFinalQuestion(toAnswer.length === 1)
	}, [toAnswer.length])

	const saveAnswer = () => {
		answers.current[toAnswer[0]] = currentAnswer
	}

	const skip = () => {
		setCurrentAnswer(null)
		setToAnswer((prev) => {
			prev.push(prev.shift())
			return [...prev]
		})
	}

	const next = () => {
		saveAnswer()
		setCurrentAnswer(null)
		setToAnswer((prev) => {
			prev.shift()
			return prev
		})
		console.log(answers)
	}

	const finishTest = () => {
		saveAnswer()
		console.log('Finished')
		console.log(answers.current)
		slideTo('/end')
	}

	return (
		<div className='testWrapper'>
			<main className='mainWrapper testIEPage__scroll'>
				<ProgressBar className='testIEProgress' completed={progress} />
				<div className='testIEQuestions'>
					<span className='testIEQuestions__question'>
						{questions[toAnswer[0]]}
					</span>
					<OptionButtonGroup
						wrapWith='div'
						className='testIEQuestions__answers'
						onChange={(value) => setCurrentAnswer(value)}
						value={currentAnswer}
					>
						<OptionButton value={1}>Completamente falso para mí</OptionButton>
						<OptionButton value={2}>Bastante falso para mí</OptionButton>
						<OptionButton value={3}>Ni verdadero ni falso para mí</OptionButton>
						<OptionButton value={4}>Bastante verdadero para mí</OptionButton>
						<OptionButton value={5}>
							Completamente verdadero para mí
						</OptionButton>
					</OptionButtonGroup>
				</div>
			</main>
			<footer>
				<TextButton onClick={skip}>Saltar Pregunta</TextButton>
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
