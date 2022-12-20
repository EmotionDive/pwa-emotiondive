import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { TextArea } from '../../../../components/Forms'
import { ActivitiesLocalizationBar } from '../../../../components/LocalizationBar'
import {
	ModalAction,
	ModalProvider,
	LargeButtonModal,
} from '../../../../components/Modal'
import data from './data/IdentifyEmotionsActivity.json'

import { LargeButton } from '../../../../components/Buttons'
const IdentifyEmotionsActivity = () => {
	const [preguntaActual, setPreguntaActual] = useState(0)
	const [puntuación, setPuntuacion] = useState(0)
	const [isFinished, setIsFinished] = useState(false)
	const handlerAnswer = (index) => {
		console.log(index)
	}
	return (
		<div className='IdentifyEmotionsActivity'>
			<ModalProvider>
				<ActivitiesLocalizationBar title={data.title} variant='SelfKnowledge' />
				<main className='IdentifyEmotionsActivity'>
					<br></br>
					<div className='questions'>
						<span className='systemText__instruction'>{data.instructions}</span>
						<br></br>
						<br></br>
						<div className='formContainer'>
							<br />
							<div className='Question'>Imagen</div>
							<div className='Description'>{data.scenarios[0].situation}</div>
							<div className='Question'>{data.situation}</div>
							<div className='answers'>
								{data.scenarios[preguntaActual].messages.map(
									(emociones, index) => (
										<button
											key={index}
											onClick={() => {
												handlerAnswer(index)
											}}
										>
											{emociones}
										</button>
									)
								)}
							</div>
							<LargeButton></LargeButton>
						</div>
					</div>
				</main>
				<ModalAction />
			</ModalProvider>
		</div>
	)
}

export default IdentifyEmotionsActivity
