import { useEffect, useRef, useState } from 'react'
import {
	LargeButton,
	OptionButton,
	OptionButtonGroup,
} from '../../../../components/Buttons'
import { ActivitiesLocalizationBar } from '../../../../components/LocalizationBar'
import {
	LargeButtonModal,
	ModalAction,
	ModalProvider,
} from '../../../../components/Modal'
import TextFormatter from '../../../../utils/TextFormatter/TextFormatter'
import data from './data/SelfRegulationTestData.json'
import img from '../../../../assets/images/pictures/SelfRegulationAct5.png'

const letters = ['A', 'B', 'C', 'D']

// TODO: CONNECT TO API AND MAKE REDIRECTS

const SelfRegulationTestActivity = () => {
	const [questionIndex, setQuestionIndex] = useState(0)
	const [currentAnswer, setCurrentAnswer] = useState(null)
	const [grade, setGrade] = useState(0)
	const [introduction, setIntroduction] = useState(true)
	const allAnswers = useRef([])
	const scrollTop = useRef(null)

	useEffect(() => {
		scrollTop.current.scrollIntoView({ behavior: 'smooth' })
	}, [questionIndex])

	const nextQuestion = () => {
		allAnswers.current.push(letters.indexOf(currentAnswer))
		setCurrentAnswer(null)
		setQuestionIndex((prev) => prev + 1)
	}

	const gradeAll = () => {
		let grade = 0
		for (let i = 0; i < data.situations.length; i++) {
			if (allAnswers.current[i] === data.situations[i].correct) {
				grade++
			}
		}
		setGrade(grade)
	}

	return (
		<div className='SelfRegulationActivity' ref={scrollTop}>
			<ModalProvider>
				<ActivitiesLocalizationBar
					title={data.title}
					variant='SelfRegulation'
				/>
				{introduction ? (
					<main className='explainStrategiesActivity'>
						<div className='centerMain'>
							<div className='textWithImage'>
								<img src={img} alt='Autorregulación' />
								<div>
									{data.introduction.map((paragraph, key) => (
										<TextFormatter key={key} wrapWith='p'>
											{paragraph}
										</TextFormatter>
									))}
								</div>
							</div>
							<LargeButton onClick={() => setIntroduction(false)}>
								Empezar
							</LargeButton>
						</div>
					</main>
				) : questionIndex < data.situations.length ? (
					<main className='learnStrategiesActivity'>
						<span className='systemText__instruction'>{data.instruction}</span>
						<div className='question'>
							<span className='question__label'>
								Situación {questionIndex + 1}:
							</span>
							<p className='question__situation'>
								{data.situations[questionIndex].situation}
							</p>
							<span className='question__label'>
								¿Cómo actuarás frente a esta situación?
							</span>
							<OptionButtonGroup
								wrapWith='div'
								className='question__answers'
								onChange={(value) => setCurrentAnswer(value)}
								value={currentAnswer}
							>
								{data.situations[questionIndex].answers.map((text, index) => (
									<OptionButton
										value={letters[index]}
										key={index}
										variant='SelfRegulation'
										fontWeight='medium'
									>
										{text}
									</OptionButton>
								))}
							</OptionButtonGroup>
							<div className='question__bottom'>
								{questionIndex !== data.situations.length - 1 ? (
									<LargeButton
										color='secondary'
										disabled={currentAnswer === null}
										onClick={nextQuestion}
									>
										Siguiente
									</LargeButton>
								) : (
									<LargeButton
										onClick={() => {
											nextQuestion()
											gradeAll()
										}}
									>
										Terminar
									</LargeButton>
								)}
							</div>
						</div>
					</main>
				) : (
					<main className='learnStrategiesActivity'>
						<span className='systemText__instruction'>
							{grade !== data.situations.length ? (
								<>
									<b>¡No te rindas!</b> Necesitas una calificación perfecta para
									aprobar.
								</>
							) : (
								<>
									<b>¡Enhorabuena!</b> Obtuviste una calificación perfecta.
								</>
							)}
						</span>
						<div className='question'>
							<span className='question__label'>Tus respuestas:</span>
							<div className='question__answers'>
								{data.situations.map((situation, index) => (
									<div key={index}>
										<p className='question__situation'>
											<b>{index + 1}.</b> {situation.situation}
										</p>
										<OptionButton
											errorSucces={
												situation.correct === allAnswers.current[index]
													? 'success'
													: 'error'
											}
											fontWeight='medium'
											value={0}
										>
											{situation.answers[allAnswers.current[index]]}
										</OptionButton>
										{situation.correct !== allAnswers.current[index] ? null : (
											<p className='justifyText explication'>
												<b>Explicación: </b>
												{situation.explication}
											</p>
										)}
									</div>
								))}
							</div>
						</div>
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<LargeButtonModal
								title={
									grade !== data.situations.length
										? '¡No te rindas!'
										: '¡Felicidades. terminaste la actividad!'
								}
								info={
									grade !== data.situations.length
										? data.badFinal
										: data.goodFinal
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
						</div>
					</main>
				)}
				<ModalAction />
			</ModalProvider>
		</div>
	)
}

export default SelfRegulationTestActivity
