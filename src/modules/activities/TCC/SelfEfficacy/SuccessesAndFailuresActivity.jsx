import { TextArea } from '../../../../components/Forms'
import { ActivitiesLocalizationBar } from '../../../../components/LocalizationBar'
import {
	ModalAction,
	ModalProvider,
	LargeButtonModal,
} from '../../../../components/Modal'
import data from './data/SuccessesAndFailuresData.json'

const views = []

const SuccessesAndFailuresActivity = () => {
	return (
		<div className='SelfEfficacyActivity'>
			<ModalProvider>
				<ActivitiesLocalizationBar title={data.title} variant='SelfEfficacy' />
				<main className='successesAndFailuresActivity'>
					<div className='questions'>
						<p className='systemText__instruction'>{data.instructions[0]}</p>
						<div className='formContainer'>
							<TextArea
								label='Último éxito'
								placeholder='Redacta aquí el último éxito que recuerdes...'
								rows={4}
							/>
							<TextArea
								label='¿Qué estuvo en tus manos para tener éxito?'
								placeholder='Redacta aquí tu respuesta...'
								rows={4}
							/>
							<TextArea
								label='¿Qué estuvo más allá de tu alcance para tener éxito?'
								placeholder='Redacta aquí tu respuesta...'
								rows={4}
							/>
							<LargeButtonModal
								title={'¡Terminaste de usar la estrategia!'}
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
