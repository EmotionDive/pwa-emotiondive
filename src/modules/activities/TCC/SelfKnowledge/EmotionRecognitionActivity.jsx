import { useState } from 'react'
import { ActivitiesLocalizationBar } from '../../../../components/LocalizationBar'
import {
	ModalAction,
	ModalProvider,
	LargeButtonModal,
} from '../../../../components/Modal'
import { LargeButton } from '../../../../components/Buttons'
import { TextArea } from '../../../../components/Forms'
import Alegria from '../../../../assets/images/pictures/SelfKnowledge-Alegria.png'
import Tristeza from '../../../../assets/images/pictures/SelfKnowledge-Tristeza.png'
import Miedo from '../../../../assets/images/pictures/SelfKnowledge-Miedo.png'
import Enojo from '../../../../assets/images/pictures/SelfKnowledge-Enojo.png'
import Afecto from '../../../../assets/images/pictures/SelfKnowledge-Afecto.jpg'
import data from './data/EmotionRecognitionData.json'

const emotionsImages = [Alegria, Tristeza, Miedo, Enojo, Afecto]

const EmotionRecognitionActivity = () => {
	const [emotion, setEmotion] = useState(0)
	const [finished, setFinished] = useState(false)
	const [similarities, setSimilarities] = useState('')
	const [diferences, setDiferences] = useState('')

	const nextEmotion = () => {
		setEmotion((prev) => prev + 1)
		setSimilarities('')
		setDiferences('')
	}

	return (
		<div className='SelfKnowledgeActivity'>
			<ModalProvider>
				<ActivitiesLocalizationBar title={data.title} variant='SelfKnowledge' />
				<main className='EmotionRecognitionActivity'>
					<span className='systemText__instruction'>{data.instructions}</span>
					<div className='wrapper'>
						<div className='section'>
							<img
								src={emotionsImages[emotion]}
								className='emotionPicture'
								alt='Imagen mostrando una emoción'
							/>
						</div>
						<div className='section'>
							<TextArea
								label={data.emotions[emotion].questions[0]}
								placeholder='Redacta las diferencias en la forma en que tu demuestras esa emocion...'
								rows={3}
								value={similarities}
								onChange={(e) => setSimilarities(e.target.value)}
							/>
							<TextArea
								label={data.emotions[emotion].questions[1]}
								placeholder='Redacta las diferencias en la forma en que tu demuestras esa emocion...'
								rows={3}
								value={diferences}
								onChange={(e) => setDiferences(e.target.value)}
							/>
						</div>
					</div>
					<div className='activityBottom'>
						{emotion < data.emotions.length - 1 ? (
							<LargeButton
								onClick={nextEmotion}
								disabled={similarities === '' || diferences === ''}
							>
								Siguiente
							</LargeButton>
						) : (
							<LargeButtonModal
								title={'¡Terminaste de aprender!'}
								info={
									'Esperamos a que esta actividad te haya ayudad a comprender un poco más como muestras algunas de tus emociones'
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
					</div>
				</main>
				<ModalAction />
			</ModalProvider>
		</div>
	)
}

export default EmotionRecognitionActivity
