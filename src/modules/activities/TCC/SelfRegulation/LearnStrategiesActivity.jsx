import { useEffect, useRef, useState } from 'react'
import {
	LargeButton,
	OptionButton,
	OptionButtonGroup,
} from '../../../../components/Buttons'
import { ActivitiesLocalizationBar } from '../../../../components/LocalizationBar'
import {
	ModalAction,
	ModalProvider,
	LargeButtonModal,
} from '../../../../components/Modal'
import data from './data/LearnStrategiesData.json'

const letters = ['A', 'B', 'C', 'D']

// TODO: CALLBACK TO SEND API COMPLETATION (PARTIAL AND FULL) | REDIRECT | ANALIZE IF IS FIRST OR SECOND TIME

const LearnStrategiesActivity = () => {
	const [strategie, setStrategie] = useState('re-evaluation') //distraction || re-evaluation
	const [questionIndex, setQuestionIndex] = useState(0)
	const [currentAnswer, setCurrentAnswer] = useState(null)
	const [explication, setExplication] = useState(null)
	const [correctAnswer, setCorrectAnswer] = useState(null)
	const scrollBottom = useRef(null)
	const scrollTop = useRef(null)

	useEffect(() => {
		if (correctAnswer === null)
			scrollTop.current.scrollIntoView({ behavior: 'smooth' })
		else scrollBottom.current.scrollIntoView({ behavior: 'smooth' })
	}, [correctAnswer])

	const handleGrade = () => {
		setCorrectAnswer(data[strategie][questionIndex].correct)
		setExplication(data[strategie][questionIndex].explication)
	}

	const handleNext = () => {
		setQuestionIndex((prev) => prev + 1)
		setCurrentAnswer(null)
		setExplication(null)
		setCorrectAnswer(null)
	}

	return (
		<div className='SelfRegulationActivity'>
			<ModalProvider>
				<ActivitiesLocalizationBar
					variant='SelfRegulation'
					title={data.title}
				/>
				<main className='learnStrategiesActivity'>
					<span className='systemText__instruction' ref={scrollTop}>
						{data.instructions}
						<b>
							{strategie === 'distraction'
								? 'Estrategia de Distracción'
								: 'Estrategia de Reevaluación'}
							.
						</b>
					</span>
					<div className='question'>
						<span className='question__label'>Situación</span>
						<p className='question__situation'>
							{data[strategie][questionIndex].situation}
						</p>
						<span className='question__label'>
							¿Cómo actuarás frente a esta situación?
						</span>
						<OptionButtonGroup
							wrapWith='div'
							className={`question__answers ${
								correctAnswer !== null ? 'disabled' : ''
							}`}
							onChange={(value) => setCurrentAnswer(value)}
							value={currentAnswer}
						>
							{data[strategie][questionIndex].answers.map((text, index) => (
								<OptionButton
									value={letters[index]}
									key={index}
									variant='SelfRegulation'
									fontWeight='medium'
									errorSucces={
										correctAnswer === index
											? 'success'
											: correctAnswer !== null &&
											  letters.indexOf(currentAnswer) === index
											? 'error'
											: 'none'
									}
								>
									{text}
								</OptionButton>
							))}
						</OptionButtonGroup>
						<div className='question__bottom'>
							{explication === null ? null : (
								<div className='question__bottom__explication'>
									<span className='question__label'>Explicación</span>
									<p className='justifyText'>
										{data[strategie][questionIndex].explication}
									</p>
								</div>
							)}
							{correctAnswer === null ? (
								<LargeButton
									color='secondary'
									disabled={currentAnswer === null}
									onClick={handleGrade}
								>
									Calificar
								</LargeButton>
							) : questionIndex !== data[strategie].length - 1 ? (
								<LargeButton color='secondary' onClick={handleNext}>
									Siguiente
								</LargeButton>
							) : (
								<LargeButtonModal
									title={'¡Terminaste de Aprender!'}
									info={
										strategie === 'distraction'
											? data.finalPartial
											: data.finalComplete
									}
									variant='confirmation'
									buttonLabels={['Okey']}
									exitOnClickOut={false}
									onConfirmationCallback={() => {
										console.log('Finish')
									}}
								>
									Terminar
								</LargeButtonModal>
							)}
							<span ref={scrollBottom} />
						</div>
					</div>
				</main>
				<ModalAction />
			</ModalProvider>
		</div>
	)
}

export default LearnStrategiesActivity
