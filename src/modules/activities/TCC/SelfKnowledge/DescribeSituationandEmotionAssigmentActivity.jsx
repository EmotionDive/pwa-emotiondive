import { ActivitiesLocalizationBar } from '../../../../components/LocalizationBar'
import {
	LargeButtonModal,
	ModalAction,
	ModalProvider,
} from '../../../../components/Modal'
import { TextArea } from '../../../../components/Forms'
import data from './data/DescribeSituationAndEmotionAssignmentData.json'
import { EmotionButton } from './components'
import { useState } from 'react'
import useActivityUtils from '../../hooks/useActivityUtils'
import { Navigate } from 'react-router-dom'

const emotionsMATEA = ['scare', 'happiness', 'sad', 'angry', 'love']

const DescribeSituationandEmotionAssigmentActivity = () => {
	const {
		accessFromMenu,
		numberOfRealization: repetition,
		completeActivity,
	} = useActivityUtils()
	const [selectedEmotions, setSelectedEmotions] = useState([])
	const [situation, setSituation] = useState('')
	const [reason, setReason] = useState('')

	const handleEmotion = (emotion) => {
		const emotionsCopy = [...selectedEmotions]
		const alreadyChoosed = emotionsCopy.indexOf(emotion)
		if (alreadyChoosed !== -1) emotionsCopy.splice(alreadyChoosed, 1)
		else emotionsCopy.push(emotion)
		setSelectedEmotions(emotionsCopy)
	}

	if (!accessFromMenu) return <Navigate to='/' replace />

	return (
		<div className='SelfKnowledgeActivity'>
			<ModalProvider>
				<ActivitiesLocalizationBar title={data.title} />
				<main className='emotionalAssignmentActivity'>
					<span className='systemText__instruction'>{data.instructions}</span>
					<div className='question'>
						<span className='question__label'>Situación</span>
						<TextArea
							label=''
							placeholder='Redacta aquí una situación que estas viviendo o viviste...'
							value={situation}
							onChange={(e) => setSituation(e.target.value)}
						/>
						<span className='question__label'>
							¿Qué sientes/sentiste en esta situación?
						</span>
						<div className='EmotionsButtons'>
							{emotionsMATEA.map((emotion, index) => (
								<EmotionButton
									emotion={emotion}
									onClick={() => handleEmotion(emotion)}
									key={index}
									active={selectedEmotions.includes(emotion)}
								/>
							))}
						</div>
						<span className='question__label'>
							¿Porqué crees que sentiste estas emociones?
						</span>
						<TextArea
							label=''
							placeholder='Redacta aquí tu respuesta...'
							value={reason}
							onChange={(e) => setReason(e.target.value)}
						/>
					</div>
					<LargeButtonModal
						title={'¡Terminaste de asignar tus propias emociones!'}
						info={repetition !== 4 ? data.finalPartial : data.finalComplete}
						variant='confirmation'
						buttonLabels={['Okey']}
						exitOnClickOut={false}
						onConfirmationCallback={completeActivity}
						disabled={
							selectedEmotions.length === 0 ||
							situation.length < 20 ||
							reason.length < 20
						}
					>
						Terminar
					</LargeButtonModal>
				</main>
				<ModalAction />
			</ModalProvider>
		</div>
	)
}

export default DescribeSituationandEmotionAssigmentActivity
