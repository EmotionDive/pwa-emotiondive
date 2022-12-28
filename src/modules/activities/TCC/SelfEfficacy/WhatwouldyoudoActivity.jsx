import React from 'react'
import { ActivitiesLocalizationBar } from '../../../../components/LocalizationBar'
import {
	LargeButtonModal,
	ModalAction,
	ModalProvider,
} from '../../../../components/Modal'
import { TextArea } from '../../../../components/Forms'
import data from './data/Whatwouldyoudo.json'
import { useState } from 'react'
import useActivityUtils from '../../hooks/useActivityUtils'
import { Navigate } from 'react-router-dom'

const WhatWouldYouDoActivity = () => {
	const [text1, setText1] = useState('')
	const { accessFromMenu, numberOfRealization, completeActivity } =
		useActivityUtils()

	if (!accessFromMenu) return <Navigate to='/' replace />

	return (
		<div className='SelfEfficacyActivity'>
			<ModalProvider>
				<ActivitiesLocalizationBar title={data.title} variant='SelfEfficacy' />
				<main className='successesAndFailuresActivity'>
					<div className='questions'>
						<p className='systemText__instruction'>{data.instructions}</p>
						<div className='formContainer'>
							<p>
								<b>Situación: </b>
								{data.scenario[numberOfRealization].situation}
							</p>
							<p>
								<b>Aptitudes: </b>
								{data.scenario[numberOfRealization].feedback}
							</p>
							<TextArea
								label='En el siguiente cuadro, describe ¿Cómo solucionarias la situación que se te presento?'
								placeholder='Desarrolla tu solución en este recuadro ...'
								rows={4}
								value={text1}
								onChange={(e) => setText1(e.target.value)}
							/>
							<LargeButtonModal
								title={'Concluiste la actividad, ¡Felicidades!'}
								info='El identificar las aptitudes y áreas de mejora en las personas nos permiten de igual manera hacerlo con nosotros mismos. La idea es que, mientras más atentos estemos sobre ellos, podemos usarlos a nuestro favor para resolver nuestros conflictos. Sigue haciendo esta práctica día con día.'
								variant='confirmation'
								buttonLabels={['Okey']}
								exitOnClickOut={false}
								onConfirmationCallback={completeActivity}
								disabled={text1.length < 30}
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

export default WhatWouldYouDoActivity
