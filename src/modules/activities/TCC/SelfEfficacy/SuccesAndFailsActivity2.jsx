import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { TextArea } from '../../../../components/Forms'
import { ActivitiesLocalizationBar } from '../../../../components/LocalizationBar'
import {
	ModalAction,
	ModalProvider,
	LargeButtonModal,
} from '../../../../components/Modal'
import useActivityUtils from '../../hooks/useActivityUtils'
import data from './data/SuccesAndFails2.json'

const SuccessesAndFailuresActivity = () => {
	const { accessFromMenu, completeActivity } = useActivityUtils()
	const [text1, setText1] = useState('')
	const [text2, setText2] = useState('')

	if (!accessFromMenu) return <Navigate to='/' replace />

	return (
		<div className='SelfEfficacyActivity'>
			<ModalProvider>
				<ActivitiesLocalizationBar title={data.title} variant='SelfEfficacy' />
				<main className='successesAndFailuresActivity'>
					<div className='questions'>
						<p className='systemText__instruction'>
							Instrucciones: De la actividad anterior, recuerda cual fue tu
							éxito y fracaso descrito, posteriormente realiza las siguientes
							preguntas:{' '}
						</p>
						<div className='formContainer'>
							<TextArea
								label='Imagina que tu situación de éxito resulto en un fracaso, ¿Cómo lo afrontarías?'
								placeholder='Redacta aquí el último éxito que recuerdes...'
								rows={4}
								value={text1}
								onChange={(e) => setText1(e.target.value)}
							/>
							<TextArea
								label='Imagina que tu situación de fracaso resultó en éxito ¿Cómo lo afrontarías?'
								placeholder='Redacta aquí tu respuesta...'
								rows={4}
								value={text2}
								onChange={(e) => setText2(e.target.value)}
							/>
							<LargeButtonModal
								title={'¡Excelente, concluiste la actividad!'}
								info='Cambiar los papeles (los éxitos en fracasos y viceversa) nos permiten identificar nuestras fortalezas y nuestras áreas de mejora a la hora de vivir ambas para que así podamos tener vivencias más plenas, correctas e inteligentes.'
								variant='confirmation'
								buttonLabels={['Okey']}
								exitOnClickOut={false}
								onConfirmationCallback={completeActivity}
								disabled={text1.length < 30 || text2.length < 30}
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

export default SuccessesAndFailuresActivity
