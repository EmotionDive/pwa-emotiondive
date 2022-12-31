import React, { useEffect, useMemo, useRef } from 'react'
import { useState } from 'react'
import { ActivitiesLocalizationBar } from '../../../../components/LocalizationBar'
import {
	LargeButtonModal,
	ModalAction,
	ModalProvider,
} from '../../../../components/Modal'
import data from './data/IdentifyEmotionsActivity.json'
import Alegria from '../../../../assets/images/pictures/SelfKnowledge-Alegria.png'
import Tristeza from '../../../../assets/images/pictures/SelfKnowledge-Tristeza.png'
import Miedo from '../../../../assets/images/pictures/SelfKnowledge-Miedo.png'
import Enojo from '../../../../assets/images/pictures/SelfKnowledge-Enojo.png'
import Afecto from '../../../../assets/images/pictures/SelfKnowledge-Afecto.jpg'
import { LargeButton } from '../../../../components/Buttons'
import { EmotionButton } from './components'
import useActivityUtils from '../../hooks/useActivityUtils'
import { Navigate } from 'react-router-dom'

const emotionsMATEA = ['scare', 'happiness', 'sad', 'angry', 'love']
const emotionsImages = [Alegria, Tristeza, Miedo, Enojo, Afecto]

function shuffle(array) {
	let currentIndex = array.length,
		randomIndex

	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex--
		;[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		]
	}

	return array
}

const IdentifyEmotionsActivity = () => {
	const { accessFromMenu, completeActivity } = useActivityUtils()
	const questions = useMemo(() => shuffle([0, 1, 2, 3, 4]), [])
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [selectedEmotion, setSelectedEmotion] = useState('')
	const [results, setResults] = useState(null)
	const scrollTop = useRef(null)

	const handleGrade = () => {
		if (data.emotions[questions[currentQuestion]].emotion === selectedEmotion)
			setResults(selectedEmotion)
		else setResults('retry')
	}

	const nextQuestion = () => {
		setCurrentQuestion((prev) => prev + 1)
		setSelectedEmotion('')
		setResults(null)
	}

	useEffect(() => {
		scrollTop.current?.scrollIntoView({ behavior: 'smooth' })
	}, [currentQuestion])

	if (!accessFromMenu) return <Navigate to='/' replace />

	return (
		<div className='SelfKnowledgeActivity' ref={scrollTop}>
			<ModalProvider>
				<ActivitiesLocalizationBar title={data.title} variant='SelfKnowledge' />
				<main className='emotionalAssignmentActivity'>
					<span className='systemText__instruction'>{data.instructions}</span>
					<div className='question'>
						<div className='image'>
							<img
								src={emotionsImages[questions[currentQuestion]]}
								alt='emotionalImage'
							/>
						</div>
						<span className='question__label'>{data.situation}</span>
						<div
							className={`EmotionsButtons ${
								results !== 'retry' && results !== null ? 'disabled' : ''
							}`}
						>
							{emotionsMATEA.map((emotion, index) => (
								<EmotionButton
									emotion={emotion}
									onClick={() => {
										if (selectedEmotion !== emotion) setSelectedEmotion(emotion)
										else setSelectedEmotion('')
									}}
									key={index}
									active={selectedEmotion === emotion}
									mark={results === emotion ? 'success' : ''}
								/>
							))}
						</div>
						{results === 'retry' ? (
							<span
								className='systemText__instruction'
								style={{
									color: 'var(--alerts-error)',
									margin: '0 auto',
									display: 'block',
								}}
							>
								Vuelve a intentarlo
							</span>
						) : null}
					</div>
					{results !== null && results !== 'retry' ? (
						currentQuestion === questions.length - 1 ? (
							<LargeButtonModal
								color='secondary'
								title={'¡Terminaste de asignar emociones!'}
								info={data.finalmessage}
								variant='confirmation'
								buttonLabels={['Okey']}
								exitOnClickOut={false}
								onConfirmationCallback={completeActivity}
							>
								Terminar
							</LargeButtonModal>
						) : (
							<LargeButton color='secondary' onClick={nextQuestion}>
								Siguiente
							</LargeButton>
						)
					) : (
						<LargeButton onClick={handleGrade} disabled={!selectedEmotion}>
							Calificar
						</LargeButton>
					)}
				</main>
				<ModalAction />
			</ModalProvider>
		</div>
	)
}

export default IdentifyEmotionsActivity
