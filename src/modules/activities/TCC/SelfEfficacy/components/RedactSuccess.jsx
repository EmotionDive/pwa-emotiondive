import React from 'react'
import { TextArea } from '../../../../../components/Forms'
import { LargeButton } from '../../../../../components/Buttons'
import { Slide, useSlides } from '../../../../../utils/Slides'
import { useState } from 'react'

const RedactSuccess = ({ data }) => {
	const { slideTo, setState: setStateSlides } = useSlides()
	const [context, setContext] = useState('')
	const HandlerClick = () => {
		setStateSlides(context)
		slideTo('/RedactEmotionsAndReasons')
	}

	return (
		<div className='questions'>
			<p className='systemText__instruction'>{data.instructions}</p>
			<div className='formContainer'>
				<TextArea
					onChange={(e) => setContext(e.target.value)}
					value={context}
					label=''
					placeholder='Redacta aquí tu situación y las dos opciones a elegir.'
					rows={4}
				/>
				<LargeButton onClick={HandlerClick} disabled={context.length <= 50}>
					Siguiente
				</LargeButton>
			</div>
		</div>
	)
}

export default RedactSuccess
