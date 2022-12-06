/* eslint-disable react/prop-types */
import { ActivitiesLocalizationBar } from '../../../../components/LocalizationBar'
import data from './data/SelfRegulationStrategiesData.json'
import img1 from '../../../../assets/images/pictures/SelfRegulationAct2-1.png'
import img2 from '../../../../assets/images/pictures/SelfRegulationAct2-2.png'
import img3 from '../../../../assets/images/pictures/SelfRegulationAct2-3.png'
import img4 from '../../../../assets/images/pictures/SelfRegulationAct2-4.png'
import img5 from '../../../../assets/images/pictures/SelfRegulationAct2-5.png'
import TextFormatter from '../../../../utils/TextFormatter/TextFormatter'
import { LargeButton, TextButton } from '../../../../components/Buttons'
import { useState } from 'react'
import {
	ModalProvider,
	ModalAction,
	useModalAction,
} from '../../../../components/Modal'

const imgs = [img1, img2, img3, img4, img5]

// TODO: CALLBACK TO SEND API COMPLETATION AND REDIRECT

const SelfRegulationStrategiesActivity = () => {
	const [scriptIndex, setScriptIndex] = useState(0)
	const [watchSlide, setWatchSlide] = useState(-1)
	const [finishDistraction, setFinishDistraction] = useState(false)
	const [finishReevaluation, setFinishReevaluation] = useState(false)

	return (
		<div className='SelfRegulationActivity'>
			<ModalProvider>
				<ActivitiesLocalizationBar
					variant='SelfRegulation'
					title={data.title}
				/>
				<main className='explainStrategiesActivity'>
					{scriptIndex === 3 ? null : (
						<div className='centerMain'>
							<div className='textWithImage'>
								<img src={imgs[scriptIndex]} alt='Actividad 1' />
								<div>
									{data.mainScript[scriptIndex].map((paragraph, key) => (
										<TextFormatter key={key} wrapWith='p'>
											{paragraph}
										</TextFormatter>
									))}
								</div>
							</div>
							<LargeButton onClick={() => setScriptIndex((prev) => prev + 1)}>
								Siguiente
							</LargeButton>
						</div>
					)}
					{scriptIndex === 3 && watchSlide === -1 ? (
						<MainStrategiesMenu
							finishDistraction={finishDistraction}
							finishReevaluation={finishReevaluation}
							callbackDistraction={() => setWatchSlide(0)}
							callbackReevaluation={() => setWatchSlide(1)}
						/>
					) : null}
					{watchSlide === -1 ? null : (
						<div className='centerMain'>
							<h1>{data.slides[watchSlide].title}</h1>
							<div className='textWithImage'>
								<img
									src={imgs[watchSlide + 3]}
									alt={data.slides[watchSlide].title}
								/>
								<div>
									{data.slides[watchSlide].content.map((paragraph, key) => (
										<TextFormatter key={key} wrapWith='p'>
											{paragraph}
										</TextFormatter>
									))}
								</div>
							</div>
							<TextButton
								color='secondary'
								withBack
								onClick={() => {
									if (watchSlide == 0) setFinishDistraction(true)
									else setFinishReevaluation(true)
									setWatchSlide(-1)
								}}
							>
								Atrás
							</TextButton>
						</div>
					)}
				</main>
				<ModalAction />
			</ModalProvider>
		</div>
	)
}

const MainStrategiesMenu = ({
	finishDistraction,
	finishReevaluation,
	callbackDistraction,
	callbackReevaluation,
}) => {
	const { operateModal } = useModalAction()

	return (
		<div className='strategiesContainer'>
			<span className='systemText__instruction'>
				Estudia los siguientes temas para terminar la actividad:
			</span>
			<div className='strategiesButtons'>
				<div>
					<img src={imgs[3]} alt='Distracción' />
					<LargeButton type='outlined' onClick={callbackDistraction}>
						Estrategia de Distracción
					</LargeButton>
				</div>
				<div>
					<img src={imgs[4]} alt='Revaluación' />
					<LargeButton type='outlined' onClick={callbackReevaluation}>
						Estrategia de Reevaluación
					</LargeButton>
				</div>
			</div>
			<LargeButton
				disabled={!finishDistraction || !finishReevaluation}
				onClick={() => {
					operateModal(
						'¡Listo, eso es todo!',
						data.final,
						'confirm',
						['Terminar'],
						() => {},
						false
					)
				}}
			>
				Terminar Actividad
			</LargeButton>
		</div>
	)
}

export default SelfRegulationStrategiesActivity
