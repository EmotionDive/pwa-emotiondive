import { TextArea } from '../../../../components/Forms'
import { ActivitiesLocalizationBar } from '../../../../components/LocalizationBar'
import {
	ModalAction,
	ModalProvider,
	LargeButtonModal,
} from '../../../../components/Modal'
import data from './data/SuccesAndFails2.json'

const views = []

const SuccessesAndFailuresActivity = () => {
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
							/>
							<TextArea
								label='Imagina que tu situación de fracaso resultó en éxito ¿Cómo lo afrontarías?'
								placeholder='Redacta aquí tu respuesta...'
								rows={4}
							/>
							<LargeButtonModal
								title={'¡Excelente, concluiste la actividad!'}
								// info={repetition !== 4 ? data.finalPartial : data.finalComplete}
								variant='confirmation'
								buttonLabels={['Okey']}
								exitOnClickOut={false}
								onConfirmationCallback={() => {
									console.log('Finish')
								}}
								// disabled={situation.length === 0 || strategie.length === 0}
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
