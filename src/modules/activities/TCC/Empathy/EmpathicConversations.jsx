import { useState } from 'react'
import { ActivitiesLocalizationBar } from '../../../../components/LocalizationBar'
import {
	ModalAction,
	ModalProvider,
	LargeButtonModal,
} from '../../../../components/Modal'
import ReceivedMessage from './components/messages/ReceivedMessage'
import SendMessage from './components/messages/SendMessage'
import FeedbackMessage from './components/messages/FeedbackMessage'
import OptionsMessage from './components/messages/OptionsMessage'
import empathyImg from '../../../../assets/images/pictures/Empathy-EmpathyLogo.png'
import data from './data/EmpathicConversationsData.json'
import useActivityUtils from '../../hooks/useActivityUtils'
import { Navigate } from 'react-router-dom'

const EmpathicConversations = () => {
	const { accessFromMenu, completeActivity } = useActivityUtils()

	const [currentScenario] = useState(
		Math.floor(Math.random() * (data.scenarios.length - 0))
	)
	const [currentMessage, setCurrentMessage] = useState(0)
	const [finished, setFinished] = useState(false)
	const [conversation, setConversation] = useState([
		['received', data.scenarios[currentScenario].conversation[0].message],
	])

	const handleNewMessage = (feedback, answer) => {
		if (
			currentMessage <
			data.scenarios[currentScenario].conversation.length - 1
		) {
			setConversation((prev) => [
				...prev,
				['answer', answer],
				['feedback', feedback],
				[
					'received',
					data.scenarios[currentScenario].conversation[currentMessage].message,
				],
			])
			setCurrentMessage((prev) => prev + 1)
			console.log(currentMessage)
		} else {
			console.log('Entro')
			setFinished(true)
			setConversation((prev) => [
				...prev,
				['answer', answer],
				['feedback', feedback],
			])
		}
	}

	if (!accessFromMenu) return <Navigate to='/' replace />

	return (
		<div className='EmpathyActivity'>
			<ModalProvider>
				<ActivitiesLocalizationBar variant='Empathy' title={data.title} />
				<main className='EmpathicConversationsActivity'>
					<div className='scenario'>
						<span className='instruction'>{data.instruction}</span>
						<span className='scenario__title'>
							{data.scenarios[currentScenario].name}
						</span>
						<p className='scenario__situation'>
							{data.scenarios[currentScenario].description}
						</p>
						<div className='chatContainer'>
							<div className='userDisplay'>
								<img
									src={empathyImg}
									className='profilePicture'
									alt='Imagen del usuario'
								/>
								<p className='username'>
									{data.scenarios[currentScenario].person}
								</p>
							</div>
							<div className='chatWindow'>
								{conversation.map((obj, index) => (
									<div key={index}>
										{obj[0] === 'received' ? (
											<ReceivedMessage
												key={index}
												person={data.scenarios[currentScenario].person}
												content={obj[1]}
											/>
										) : obj[0] === 'feedback' ? (
											<FeedbackMessage key={index} content={obj[1]} />
										) : obj[0] === 'answer' ? (
											<SendMessage key={index} content={obj[1]} />
										) : null}
									</div>
								))}
								{!finished ? (
									<OptionsMessage
										handleNewMessage={handleNewMessage}
										content={
											data.scenarios[currentScenario].conversation[
												currentMessage
											].options
										}
									/>
								) : null}
							</div>
						</div>
						<div className='scenario__bottom'>
							{finished ? (
								<LargeButtonModal
									title={'??Terminaste de Aprender!'}
									info={
										'Terminaste la conversaci??n, esperamos que la retroalimentaci??n te haya sido de ayuda!'
									}
									variant='confirmation'
									buttonLabels={['Siguiente']}
									exitOnClickOut={false}
									onConfirmationCallback={completeActivity}
								>
									Terminar
								</LargeButtonModal>
							) : null}
						</div>
					</div>
				</main>
				<ModalAction />
			</ModalProvider>
		</div>
	)
}

export default EmpathicConversations
