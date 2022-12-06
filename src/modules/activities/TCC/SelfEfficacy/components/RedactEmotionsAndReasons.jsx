import React from 'react'
import { TextArea } from '../../../../../components/Forms'
import { LargeButton } from '../../../../../components/Buttons'
import { useSlides } from '../../../../../utils/Slides'
import { LargeButtonModal } from '../../../../../components/Modal'
const RedactEmotionsAndReasons = ({ data }) => {
	const { slideTo, state } = useSlides()
    console.log(state)
	return (
		<div className='questions'>
			<p className='systemText__instruction'>
				En la parte anterior, describiste un contexto, deberas de descomponer el contexto en función de las razones y emociones
                que te produce cada opción:
			</p>
            <p>{state}</p>
			<div className='formContainer'>
				<TextArea
					label='¿Cómo te sientes si tomas la primera opción?'
					placeholder='Redacta aquí,¿Cómo te sientes?'
					rows={4}
				/>
				<TextArea
					label='¿Cuáles son las razones por las que tomarías la primera opción?'
					placeholder='Redacta aquí tus razones...'
					rows={4}
				/>
                <TextArea
					label='¿Cómo te sientes si tomas la segunda opción?'
					placeholder='Redacta aquí,¿Cómo te sientes?'
					rows={4}
				/>
				<TextArea
					label='¿Cuáles son las razones por las que tomarías la segunda opción?'
					placeholder='Redacta aquí tus razones...'
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
	)
}

export default RedactEmotionsAndReasons
