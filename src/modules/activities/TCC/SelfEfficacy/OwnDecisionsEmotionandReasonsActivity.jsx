import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { TextArea } from '../../../../components/Forms'
import { ActivitiesLocalizationBar } from '../../../../components/LocalizationBar'
import {
	ModalAction,
	ModalProvider,
	LargeButtonModal,
} from '../../../../components/Modal'
import data from './data/OwnDecisionsReasonEmotion.json'

const OwnDecisionsEmotionandReasonsActivity = () => {
	const [currentSet] = useState(
		Math.floor(Math.random() * (data.scenarios.length - 0))
	)

	const handleNext = () => {
		currentSet((prev) => prev + 1)
	}

	return (
		<div className='SelfEfficacyActivity'>
			<ModalProvider>
				<ActivitiesLocalizationBar title={data.title} variant='SelfEfficacy' />
				<main className='successesAndFailuresActivity'>
					<div className='questions'>
						<p className='systemText__instruction'>{data.instructions}</p>
						<p>{data.scenarios[0].situation}</p>
						<div className='formContainer'>
							<TextArea
								label='Describe las emociones que sentirias, al escoger la opción 1'
								placeholder='Redacta aquí el último éxito que recuerdes...'
								rows={4}
							/>
							<TextArea
								label='Describe las razones por las que escogerias la opción 1'
								placeholder='Redacta aquí tu respuesta...'
								rows={4}
							/>
							<TextArea
								label='Describe las razones por las que escogerias la opción 2'
								placeholder='Redacta aquí tu respuesta...'
								rows={4}
							/>
							<TextArea
								label='Describe las razones por las que escogerias la opción 2'
								placeholder='Redacta aquí tu respuesta...'
								rows={4}
							/>
							<LargeButtonModal
								title={'¡Excelente, concluiste la actividad!'}
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
					</div>
				</main>
				<ModalAction />
			</ModalProvider>
		</div>
	)
}

export default OwnDecisionsEmotionandReasonsActivity
