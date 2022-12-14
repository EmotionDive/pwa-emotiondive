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
import TestService from '../../../fetchers/TestService'
import useUser from '../../../data/hooks/useUser'

const QuestionsTestIESlide = () => {
	// Save all answers on a ref
	const answers = useRef([...Array(questions.length)])
	// State of the current answer of the current question.
	const [currentAnswer, setCurrentAnswer] = useState(null)
	// Questions left to answer
	const [toAnswer, setToAnswer] = useState([...Array(questions.length).keys()])
	// Boolean in order to see if it is the last question
	const [isFinalQuestion, setIsFinalQuestion] = useState(false)
	//UserData
	const { userData } = useUser()

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
	}

	const finishTest = () => {
		saveAnswer()
		TestService.createTest(userData.username, answers.current)
			.then((data) => {
				if (data.status === 'success') slideTo('/end')
				else {
					// alert('Error en API')
					console.error(data)
				}
			})
			.catch((error) => {
				alert('Error en API')
				console.error(error)
			})
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
						<OptionButton value={1}>Completamente falso para m??</OptionButton>
						<OptionButton value={2}>Bastante falso para m??</OptionButton>
						<OptionButton value={3}>Ni verdadero ni falso para m??</OptionButton>
						<OptionButton value={4}>Bastante verdadero para m??</OptionButton>
						<OptionButton value={5}>
							Completamente verdadero para m??
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
