import { useEffect, useRef, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { LargeButton } from '../../../../components/Buttons'
import { ActivitiesLocalizationBar } from '../../../../components/LocalizationBar'
import {
	LargeButtonModal,
	ModalAction,
	ModalProvider,
} from '../../../../components/Modal'
import useActivityUtils from '../../hooks/useActivityUtils'
import { EmotionButton } from './components'
import data from './data/EmotionalAssignmentData.json'

const emotionsMATEA = ['scare', 'happiness', 'sad', 'angry', 'love']

const EmotionalAssigmentActivity = () => {
	const {
		accessFromMenu,
		numberOfRealization: repetition,
		completeActivity,
	} = useActivityUtils()

	const [questionIndex, setQuestionIndex] = useState(repetition * 5)
	const limit = repetition * 5 + 4
	const [selectedEmotions, setSelectedEmotions] = useState([])
	const [results, setResults] = useState(null)

	const scrollTop = useRef(null)
	const scrollBottom = useRef(null)

	useEffect(() => {
		if (results) scrollBottom.current?.scrollIntoView({ behavior: 'smooth' })
		else scrollTop.current?.scrollIntoView({ behavior: 'smooth' })
	}, [questionIndex, results])

	const handleEmotion = (emotion) => {
		const emotionsCopy = [...selectedEmotions]
		const alreadyChoosed = emotionsCopy.indexOf(emotion)
		if (alreadyChoosed !== -1) emotionsCopy.splice(alreadyChoosed, 1)
		else emotionsCopy.push(emotion)
		setSelectedEmotions(emotionsCopy)
	}

	const handleGrade = () => {
		const grade = []
		emotionsMATEA.forEach((emotion) => {
			if (data.situations[questionIndex].emotions.includes(emotion)) {
				if (selectedEmotions.includes(emotion)) grade.push('success')
				else grade.push('absence')
			} else {
				if (selectedEmotions.includes(emotion)) grade.push('error')
				else grade.push('opaque')
			}
		})
		setResults(grade)
	}

	const nextQuestion = () => {
		setResults(null)
		setSelectedEmotions([])
		setQuestionIndex((prev) => prev + 1)
	}

	if (!accessFromMenu) return <Navigate to='/' replace />

	return (
		<div className='SelfKnowledgeActivity' ref={scrollTop}>
			<ModalProvider>
				<ActivitiesLocalizationBar title={data.title} />
				<main className='emotionalAssignmentActivity'>
					<span className='systemText__instruction'>{data.instructions}</span>
					<div className='question'>
						<span className='question__label'>
							Situación {questionIndex + 1}:
						</span>
						<p className='question__situation'>
							{data.situations[questionIndex].situation}
						</p>
						<span className='question__label'>
							¿Qué sentirías en esta situación?
						</span>
						<div className={`EmotionsButtons ${results ? 'disabled' : ''}`}>
							{emotionsMATEA.map((emotion, index) => (
								<EmotionButton
									emotion={emotion}
									onClick={() => handleEmotion(emotion)}
									key={index}
									active={selectedEmotions.includes(emotion)}
									mark={results ? results[index] : ''}
								/>
							))}
						</div>
						<div className='explication'>
							{!results ? null : (
								<>
									<span className='question__label'>Explicación:</span>
									<p className='question__situation'>
										{data.situations[questionIndex].explication}
									</p>
								</>
							)}
						</div>
					</div>
					{!results ? (
						<LargeButton
							disabled={selectedEmotions.length === 0}
							color='secondary'
							onClick={handleGrade}
						>
							Calificar
						</LargeButton>
					) : questionIndex < limit ? (
						<LargeButton onClick={nextQuestion}>Siguiente</LargeButton>
					) : (
						<LargeButtonModal
							title={'¡Terminaste de asignar emociones!'}
							info={repetition !== 2 ? data.finalPartial : data.finalComplete}
							variant='confirmation'
							buttonLabels={['Okey']}
							exitOnClickOut={false}
							onConfirmationCallback={completeActivity}
						>
							Terminar
						</LargeButtonModal>
					)}
					<span ref={scrollBottom} />
				</main>
				<ModalAction />
			</ModalProvider>
		</div>
	)
}

export default EmotionalAssigmentActivity
