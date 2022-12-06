import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { TextArea } from '../../../../components/Forms'
import { ActivitiesLocalizationBar } from '../../../../components/LocalizationBar'
import {
	ModalAction,
	ModalProvider,
	LargeButtonModal,
} from '../../../../components/Modal'
import data from './data/IdentifyEmotionsActivity.json'

const IdentifyEmotionsActivity = () => {
	return (
		<div className='SelfKnowledgeActivity'>
			<ModalProvider>
				<ActivitiesLocalizationBar title={data.title} variant='SelfKnowledge' />
				<main className='successesAndFailuresActivity'>
					<div className='questions'>
						<p className='systemText__instruction'>{data.instructions}</p>
						<br />
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
							<br />
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

export default IdentifyEmotionsActivity
