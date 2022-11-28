import { useState } from 'react'
import { LargeButton } from '../../../../components/Buttons'
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
import data from './data/EmpathicConversationsData.json'

const EmpathicConversations = () => {
	return (
		<div className='EmpathyActivity'>
			<ModalProvider>
				<ActivitiesLocalizationBar variant='Empathy' title={data.title} />
				<main className='EmpathicConversationsActivity'>
					<div className='scenario'>
						<span className='instruction'>{data.instruction}</span>
						<span className='scenario__title'>{data.scenarios[0].name}</span>
						<p className='scenario__situation'>
							{data.scenarios[0].description}
						</p>
						<div className='chatWindow'>
							<ReceivedMessage
								content={data.scenarios[0].conversation[0].message}
							/>

							<SendMessage
								content={data.scenarios[0].conversation[0].message}
							/>

							<FeedbackMessage
								content={data.scenarios[0].conversation[0].message}
							/>

							<OptionsMessage
								content={data.scenarios[0].conversation[0].options}
							/>
						</div>
					</div>
				</main>
				<ModalAction />
			</ModalProvider>
		</div>
	)
}

export default EmpathicConversations
