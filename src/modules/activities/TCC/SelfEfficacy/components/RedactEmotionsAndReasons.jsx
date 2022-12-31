import React, { useState } from 'react'
import { TextArea } from '../../../../../components/Forms'
import { useSlides } from '../../../../../utils/Slides'
import { LargeButtonModal } from '../../../../../components/Modal'
import useActivityUtils from '../../../hooks/useActivityUtils'
const RedactEmotionsAndReasons = ({ data }) => {
	const { completeActivity } = useActivityUtils()

	const [text1, setText1] = useState('')
	const [text2, setText2] = useState('')
	const [text3, setText3] = useState('')
	const [text4, setText4] = useState('')

	const { state } = useSlides()
	return (
		<div className='questions'>
			<p className='systemText__instruction'>
				En la parte anterior, describiste un contexto, deberas de descomponer el
				contexto en función de las razones y emociones que te produce cada
				opción:
			</p>
			<p>{state}</p>
			<div className='formContainer'>
				<TextArea
					label='¿Cómo te sientes si tomas la primera opción?'
					placeholder='Redacta aquí, ¿Cómo te sientes?'
					rows={4}
					value={text1}
					onChange={(e) => setText1(e.target.value)}
				/>
				<TextArea
					label='¿Cuáles son las razones por las que tomarías la primera opción?'
					placeholder='Redacta aquí tus razones...'
					rows={4}
					value={text2}
					onChange={(e) => setText2(e.target.value)}
				/>
				<TextArea
					label='¿Cómo te sientes si tomas la segunda opción?'
					placeholder='Redacta aquí, ¿Cómo te sientes?'
					rows={4}
					value={text3}
					onChange={(e) => setText3(e.target.value)}
				/>
				<TextArea
					label='¿Cuáles son las razones por las que tomarías la segunda opción?'
					placeholder='Redacta aquí tus razones...'
					rows={4}
					value={text4}
					onChange={(e) => setText4(e.target.value)}
				/>
				<LargeButtonModal
					title={'¡Excelente, concluiste la actividad!'}
					info={
						'Reconociendo situaciones propias y analizando balanceadamente tus decisiones te permitirá generar acciones más inteligentes. Continúa haciendo esta práctica en cualquier decisión que se te presente en el futuro y verás que con Inteligencia Emocional obtendrás mejores resultados.'
					}
					variant='confirmation'
					buttonLabels={['Okey']}
					exitOnClickOut={false}
					onConfirmationCallback={completeActivity}
					disabled={
						text1.length < 30 ||
						text2.length < 30 ||
						text3.length < 30 ||
						text4.length < 30
					}
				>
					Terminar
				</LargeButtonModal>
			</div>
		</div>
	)
}

export default RedactEmotionsAndReasons
