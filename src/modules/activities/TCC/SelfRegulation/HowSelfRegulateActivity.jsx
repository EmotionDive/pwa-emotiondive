import React, { useEffect, useRef, useState } from 'react'
import { ActivitiesLocalizationBar } from '../../../../components/LocalizationBar'
import {
	LargeButtonModal,
	ModalAction,
	ModalProvider,
} from '../../../../components/Modal'
import TextFormatter from '../../../../utils/TextFormatter/TextFormatter'
import img1 from '../../../../assets/images/pictures/SelfRegulationAct5.png'
import img2 from '../../../../assets/images/pictures/SelfRegulationAct2-1.png'
import img3 from '../../../../assets/images/pictures/SelfRegulationAct1.png'
import data from './data/HowSelfRegulateData.json'
import {
	LargeButton,
	OptionButton,
	OptionButtonGroup,
} from '../../../../components/Buttons'
import { Navigate } from 'react-router-dom'
import ActivitiesService from '../../../../fetchers/ActivitiesService'
import useActivityUtils from '../../hooks/useActivityUtils'

const img = [img1, img2, img3]

const letters = ['A', 'B', 'C', 'D']

const HowSelfRegulateActivity = () => {
	const [scriptIndex, setScriptIndex] = useState(0)
	const [questionIndex, setQuestionIndex] = useState(0)
	const [currentAnswer, setCurrentAnswer] = useState(null)

	const allAnswers = useRef([])
	const scrollTop = useRef(null)

	const { accessFromMenu, completeActivity } = useActivityUtils()

	useEffect(() => {
		scrollTop.current?.scrollIntoView({ behavior: 'smooth' })
	}, [questionIndex, scriptIndex])

	const nextQuestion = () => {
		allAnswers.current.push(letters.indexOf(currentAnswer))
		setCurrentAnswer(null)
		setQuestionIndex((prev) => prev + 1)
	}

	if (!accessFromMenu) return <Navigate to='/' replace />

	return (
		<div className='SelfRegulationActivity' ref={scrollTop}>
			<ModalProvider>
				<ActivitiesLocalizationBar
					title={data.title}
					variant='SelfRegulation'
				/>
				{scriptIndex < 3 ? (
					<main className='explainStrategiesActivity'>
						<div className='centerMain'>
							<div className='textWithImage'>
								<img src={img[scriptIndex]} alt='Autorregulación' />
								<div>
									{data.mainScript[scriptIndex].map((paragraph, key) => (
										<TextFormatter key={key} wrapWith='p'>
											{paragraph}
										</TextFormatter>
									))}
								</div>
							</div>
							<LargeButton onClick={() => setScriptIndex((prev) => prev + 1)}>
								Siguiente
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
							¡Muy bien! De momentos estos son tus resultados. Te darás cuenta
							que puede que hayas elegido comportamientos que no reflejan del
							todo una buena autoregulación, pero ¡tranquilo!,{' '}
							<b>
								en las siguientes actividades podrás aprender cómo empezar a
								autoregularte.
							</b>
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
										<p className='justifyText explication'>
											<b>Explicación: </b>
											{situation.explication}
										</p>
									</div>
								))}
							</div>
						</div>
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<LargeButtonModal
								title='¡Actividad Completada!'
								info={data.final}
								variant='confirmation'
								buttonLabels={['Siguiente']}
								exitOnClickOut={false}
								onConfirmationCallback={completeActivity}
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

export default HowSelfRegulateActivity
