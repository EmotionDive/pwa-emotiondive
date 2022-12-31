import { useState } from 'react'
import { ActivitiesLocalizationBar } from '../../../../components/LocalizationBar'
import {
	LargeButtonModal,
	ModalAction,
	ModalProvider,
} from '../../../../components/Modal'
import { Select, TextArea } from '../../../../components/Forms'
import data from './data/UseStrategiesOnYouData.json'

// TODO: CALLBACK TO SEND API COMPLETATION (PARTIAL AND FULL) | REDIRECT | ANALIZE REPETITION

const UseStrategiesOnYouActivity = () => {
	const [situation, setSituation] = useState('')
	const [strategie, setStrategie] = useState('')
	const [repetition, setRepetition] = useState(0)

	return (
		<div className='SelfRegulationActivity'>
			<ModalProvider>
				<ActivitiesLocalizationBar
					title={data.title}
					variant='SelfRegulation'
				/>
				<main className='useStrategiesOnYouActivity'>
					<p className='systemText__instruction justifyText'>
						{data.instructions}
					</p>
					<div className='formContainer'>
						<div>
							<Select label='Periodo de tiempo'>
								<option value='Presente'>Presente</option>
								<option value='Pasado'>Pasado</option>
							</Select>
							<Select label='Tipo de Estrategia'>
								<option value='Estrategia de Distracción'>
									Estrategía de Distracción
								</option>
								<option value='Estrategia de Reevaluación'>
									Estrategía de Reevaluación
								</option>
							</Select>
						</div>
						<TextArea
							label='Situación'
							placeholder='Redacta aquí tu situación personal...'
							rows={4}
							value={situation}
							onChange={(e) => setSituation(e.target.value)}
						/>
						<TextArea
							label='Uso de la Estrategia'
							placeholder='Redacta aquí cómo actuarías usando la estrategia elegida...'
							rows={4}
							value={strategie}
							onChange={(e) => setStrategie(e.target.value)}
						/>
						<LargeButtonModal
							title={'¡Terminaste de usar la estrategia!'}
							info={repetition !== 4 ? data.finalPartial : data.finalComplete}
							variant='confirmation'
							buttonLabels={['Siguiente']}
							exitOnClickOut={false}
							onConfirmationCallback={() => {
								console.log('Finish')
							}}
							disabled={situation.length === 0 || strategie.length === 0}
						>
							Terminar
						</LargeButtonModal>
					</div>
				</main>
				<ModalAction />
			</ModalProvider>
		</div>
	)
}

export default UseStrategiesOnYouActivity
