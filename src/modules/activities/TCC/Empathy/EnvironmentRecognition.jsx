import { useEffect, useState } from 'react'
import { LargeButton } from '../../../../components/Buttons'
import { ActivitiesLocalizationBar } from '../../../../components/LocalizationBar'
import {
	ModalAction,
	ModalProvider,
	LargeButtonModal,
} from '../../../../components/Modal'
import { TextArea } from '../../../../components/Forms'
import data from './data/EnvironmentRecognitionData.json'
import useActivityUtils from '../../hooks/useActivityUtils'
import { Navigate } from 'react-router-dom'

const EnvironmentRecognition = () => {
	const { accessFromMenu, completeActivity } = useActivityUtils()

	const [currentEnv, setCurrentEnv] = useState(0)
	const [answers, setAnswers] = useState([])

	useEffect(() => {
		// Used to clear the answers array synchronously after advancing the current environment
		setAnswers([])
	}, [currentEnv])

	const handleQuestions = (index, answerValue) => {
		if (index + 1 < answers.length) {
			setAnswers((prev) => [...prev, true])
		} else {
			if (answers.length === 0) {
				const updatedAnswers = [answerValue]
				setAnswers(updatedAnswers)
			} else {
				const updatedAnswers = [...answers]
				updatedAnswers[index] = answerValue
				setAnswers(updatedAnswers)
			}
		}
	}

	const handleNext = () => {
		setCurrentEnv((prev) => prev + 1)
	}

	if (!accessFromMenu) return <Navigate to='/' replace />

	return (
		<div className='EmpathyActivity'>
			<ModalProvider>
				<ActivitiesLocalizationBar variant='Empathy' title={data.title} />
				<main className='EnvironmentRecognitionActivity'>
					<div className='environment'>
						<span className='instruction'>{data.instruction}</span>
						<span className='environment__title'>
							{data.environments[currentEnv].name}
						</span>
						<p className='environment__situation'>
							{data.environments[currentEnv].description}
						</p>
						<div className='environment__questions'>
							{data.environments[currentEnv].questions.map((text, index) => (
								<TextArea
									key={index}
									label={text}
									placeholder='Redacta como crees que se siente la persona mencionada...'
									rows={3}
									value={answers.length === 0 ? '' : answers[index]}
									onChange={(e) => handleQuestions(index, e.target.value)}
								/>
							))}
						</div>
						<div className='environment__bottom'>
							{!(currentEnv === data.environments.length - 1) ? (
								<LargeButton
									disabled={
										answers.length !==
											data.environments[currentEnv].questions.length ||
										answers.includes('')
									}
									color='secondary'
									onClick={handleNext}
								>
									Siguiente
								</LargeButton>
							) : (
								<LargeButtonModal
									title={'¡Terminaste de aprender!'}
									info={
										'Esperamos que esta actividad te haya ayudado a empatizar con las personas que puedan estar pasando por situaciones distintas a la tuya.'
									}
									variant='confirmation'
									buttonLabels={['Okey']}
									exitOnClickOut={false}
									onConfirmationCallback={completeActivity}
									disabled={
										answers.length !==
											data.environments[currentEnv].questions.length ||
										answers.includes('')
									}
								>
									Terminar
								</LargeButtonModal>
							)}
						</div>
					</div>
				</main>
				<ModalAction />
			</ModalProvider>
		</div>
	)
}

export default EnvironmentRecognition
