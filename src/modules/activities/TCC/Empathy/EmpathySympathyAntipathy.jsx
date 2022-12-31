import { useState } from 'react'
import { TextButton } from '../../../../components/Buttons'
import { ActivitiesLocalizationBar } from '../../../../components/LocalizationBar'
import {
	ModalAction,
	ModalProvider,
	LargeButtonModal,
} from '../../../../components/Modal'
import empathyImg from '../../../../assets/images/pictures/Empathy-EmpathyLogo.png'
import sympathyImg from '../../../../assets/images/pictures/Empathy-SympathyLogo.png'
import antipathyImg from '../../../../assets/images/pictures/Empathy-AntipathyLogo.png'
import data from './data/EmpathySympathyAntipathyData.json'

const conceptImg = [empathyImg, sympathyImg, antipathyImg]

const EmpathySympathyAntipathy = () => {
	const [currentSlide, setCurrentSlide] = useState(1)
	const [seenConcepts, setSeenConcepts] = useState([1])

	const addSeenConcepts = (conceptIndex) => {
		if (!seenConcepts.includes(conceptIndex)) {
			setSeenConcepts((prev) => [...prev, conceptIndex])
		}

		console.log(seenConcepts)
	}

	const handleSlide = (direction) => {
		if (direction === 'previous') {
			if (currentSlide === 1) {
				addSeenConcepts(-1)
				setCurrentSlide(-1)
			} else {
				addSeenConcepts(currentSlide + 1)
				setCurrentSlide((prev) => prev + 1)
			}
		} else if (direction === 'next') {
			if (currentSlide === -1) {
				addSeenConcepts(1)
				setCurrentSlide(1)
			} else {
				addSeenConcepts(currentSlide - 1)
				setCurrentSlide((prev) => prev - 1)
			}
		}
	}

	return (
		<div className='EmpathyActivity'>
			<ModalProvider>
				<ActivitiesLocalizationBar variant='Empathy' title={data.title} />
				<main className='EmpathySympathyAntipathy2Activity'>
					<span className='instruction'>
						Revisa los siguientes conceptos que te serán de utilidad en
						actividades posteriores y en tu vida diaria.
					</span>
					<div className='sliderContainer'>
						<div
							className='slider'
							style={{ transform: `translate3d(${currentSlide * 100}%, 0, 0)` }}
						>
							{data.concepts.map((obj, index) => (
								<div key={index} className='slide'>
									<img
										src={conceptImg[index]}
										className='slide__img'
										alt='Concepto de empatia'
									/>
									<h1>{obj.concept_name}</h1>
									<p className='slide__text'>{obj.concept_definition}</p>
								</div>
							))}
						</div>
					</div>
					<div className='controls'>
						<div className='slideMovement'>
							<TextButton
								color='secondary'
								onClick={() => handleSlide('previous')}
							>
								Previo
							</TextButton>
							<TextButton color='secondary' onClick={() => handleSlide('next')}>
								Siguiente
							</TextButton>
						</div>
						{seenConcepts.length === 3 ? (
							<LargeButtonModal
								title={'¡Terminaste de Aprender!'}
								info={
									'Esperamos haber sido claros con los conceptos y diferencias de empatía, simpatía y antipatía, sigue así =).'
								}
								variant='confirmation'
								buttonLabels={['continuar']}
								exitOnClickOut={false}
								onConfirmationCallback={() => {
									console.log('Finish')
								}}
							>
								Terminar
							</LargeButtonModal>
						) : null}
					</div>
				</main>
				<ModalAction />
			</ModalProvider>
		</div>
	)
}

export default EmpathySympathyAntipathy
