import { useEffect, useRef, useState } from 'react'
import { TextArea } from '../../../../components/Forms'
import { ActivitiesLocalizationBar } from '../../../../components/LocalizationBar'
import {
	ModalAction,
	ModalProvider,
	LargeButtonModal,
} from '../../../../components/Modal'
import data from './data/SuccessesAndFailuresData.json'
import { LargeButton } from '../../../../components/Buttons'
import TextFormatter from '../../../../utils/TextFormatter/TextFormatter'
import img1 from '../../../../assets/images/pictures/SelfEfficacyAct4-2.png'
import img2 from '../../../../assets/images/pictures/SelfEfficacyAct4-1.png'
import useActivityUtils from '../../hooks/useActivityUtils'
import { Navigate } from 'react-router-dom'

const imgs = [img1, img2]

const SuccessesAndFailuresActivity = () => {
	const {
		accessFromMenu,
		numberOfRealization: repetition,
		completeActivity,
	} = useActivityUtils()
	const [scriptIndex, setScriptIndex] = useState(0)
	const [typeAct, setTypeAct] = useState('éxito')
	const [redaction, setRedaction] = useState('')
	const [onHands, setOnHands] = useState('')
	const [outReach, setOutReach] = useState('')
	const topRef = useRef(null)

	useEffect(() => {
		if (typeAct === 'fracaso')
			topRef.current?.scrollIntoView({ behavior: 'smooth' })
	}, [typeAct])

	if (!accessFromMenu) return <Navigate to='/' replace />

	return (
		<div className='SelfEfficacyActivity' ref={topRef}>
			<ModalProvider>
				<ActivitiesLocalizationBar title={data.title} variant='SelfEfficacy' />
				<main className='successesAndFailuresActivity'>
					{scriptIndex <= 1 ? (
						<div className='introduction'>
							<div className='textWithImage'>
								<img src={imgs[scriptIndex]} alt='' />
								<div>
									{data.mainScript[scriptIndex].map((paragraph, key) => (
										<TextFormatter
											key={key}
											wrapWith={scriptIndex === 0 ? 'p' : 'div'}
										>
											{paragraph}
										</TextFormatter>
									))}
								</div>
							</div>
							<LargeButton
								color='secondary'
								onClick={() => setScriptIndex((prev) => prev + 1)}
							>
								Siguiente
							</LargeButton>
						</div>
					) : (
						<div className='questions'>
							<p className='systemText__instruction'>
								{typeAct === 'éxito'
									? data.instructions[0]
									: data.instructions[1]}
							</p>
							<div className='formContainer'>
								<TextArea
									label={`Último ${typeAct}`}
									placeholder={`Redacta aquí el último ${typeAct} que recuerdes...`}
									rows={4}
									value={redaction}
									onChange={(e) => setRedaction(e.target.value)}
								/>
								<TextArea
									label={`¿Qué hiciste para alcanzar el ${typeAct}?`}
									placeholder='Redacta aquí tu respuesta...'
									rows={4}
									value={onHands}
									onChange={(e) => setOnHands(e.target.value)}
								/>
								<TextArea
									label={`¿Qué estuvo más allá de tu alcance para el ${typeAct}?`}
									placeholder='Redacta aquí tu respuesta...'
									rows={4}
									value={outReach}
									onChange={(e) => setOutReach(e.target.value)}
								/>
								{typeAct === 'éxito' ? (
									<LargeButton
										color='secondary'
										disabled={!redaction || !onHands || !outReach}
										onClick={() => {
											setRedaction('')
											setOutReach('')
											setOnHands('')
											setTypeAct('fracaso')
										}}
									>
										Siguiente
									</LargeButton>
								) : (
									<LargeButtonModal
										title={'¡Terminaste de usar la estrategia!'}
										info={
											repetition !== 2 ? data.finalPartial : data.finalComplete
										}
										variant='confirmation'
										buttonLabels={['Okey']}
										exitOnClickOut={false}
										onConfirmationCallback={completeActivity}
										disabled={!redaction || !onHands || !outReach}
									>
										Terminar
									</LargeButtonModal>
								)}
							</div>
						</div>
					)}
				</main>
				<ModalAction />
			</ModalProvider>
		</div>
	)
}

export default SuccessesAndFailuresActivity
