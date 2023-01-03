import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { TextArea } from '../../../../components/Forms'
import { ActivitiesLocalizationBar } from '../../../../components/LocalizationBar'
import {
	ModalAction,
	ModalProvider,
	LargeButtonModal,
} from '../../../../components/Modal'
import useActivityUtils from '../../hooks/useActivityUtils'
import data from './data/OwnDecisionsReasonEmotion.json'

const OwnDecisionsEmotionandReasonsActivity = () => {
	const { accessFromMenu, numberOfRealization, completeActivity } =
		useActivityUtils()
	const [text1, setText1] = useState('')
	const [text2, setText2] = useState('')
	const [text3, setText3] = useState('')
	const [text4, setText4] = useState('')

	const [currentSet] = useState(numberOfRealization)

	if (!accessFromMenu) return <Navigate to='/' replace />

	return (
		<div className='SelfEfficacyActivity'>
			<ModalProvider>
				<ActivitiesLocalizationBar title={data.title} variant='SelfEfficacy' />
				<main className='successesAndFailuresActivity'>
					<div className='questions'>
						<p className='systemText__instruction'>{data.instructions}</p>
						<br />
						<p>{data.scenarios[currentSet].situation}</p>
						<div className='formContainer'>
							<TextArea
								label='Describe las emociones que sentirias, al escoger la opción 1'
								placeholder='Redacta aquí el último éxito que recuerdes...'
								rows={4}
								value={text1}
								onChange={(e) => setText1(e.target.value)}
							/>
							<TextArea
								label='Describe las razones por las que escogerias la opción 1'
								placeholder='Redacta aquí tu respuesta...'
								rows={4}
								value={text2}
								onChange={(e) => setText2(e.target.value)}
							/>
							<TextArea
								label='Describe las razones por las que escogerias la opción 2'
								placeholder='Redacta aquí tu respuesta...'
								rows={4}
								value={text3}
								onChange={(e) => setText3(e.target.value)}
							/>
							<TextArea
								label='Describe las razones por las que escogerias la opción 2'
								placeholder='Redacta aquí tu respuesta...'
								rows={4}
								value={text4}
								onChange={(e) => setText4(e.target.value)}
							/>
							<LargeButtonModal
								title={'¡Excelente, concluiste la actividad!'}
								info='El realizar esta práctica te ayudará a reconocer de mejor manera como las emociones y las razones juegan un papel dentro de tus decisiones y, con un panorama más amplio, tomaras una decisión más balanceada.'
								variant='confirmation'
								buttonLabels={['Okey']}
								exitOnClickOut={false}
								onConfirmationCallback={completeActivity}
								disabled={
									text1.length < 30 ||
									text2.length < 30 ||
									text3.length < 30 ||
									text4.length < 30
								}
							>
								Continuar
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
