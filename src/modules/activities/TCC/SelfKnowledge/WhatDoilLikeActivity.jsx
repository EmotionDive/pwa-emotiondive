import React from 'react'
import { ActivitiesLocalizationBar } from '../../../../components/LocalizationBar'
import {
	LargeButtonModal,
	ModalAction,
	ModalProvider,
} from '../../../../components/Modal'
import { Select, TextArea } from '../../../../components/Forms'
import { Slide, SlideSwitch } from '../../../../utils/Slides'
import { useState } from 'react'
import { element } from 'prop-types'

const WhatDoilLikeActivity = () => {
	const [buttonActive, setButtonActive] = useState(false)
	const [cualidades, setCualidades] = useState([
		{
			cualidad: 'Físico',
			descripción:
				'Mis atributos físicos, me representan por la capacidad de realizar actividades físicas demandantes',
		},
		{
			cualidad: 'Capacidad resolutiva',
			descripción:
				'Tengo la facilidad de solucionar problemas lógico-matematicos',
		},
		{
			cualidad: 'Reconocimiento emocional',
			descripción:
				'Reconozco mis emociones, además de reconocer las del resto de personas',
		},
	])
	const [oportunidades, setOportunidad] = useState([
		{
			oportunidad: 'Físico',
			descripción:
				'Mis atributos físicos no me gustan, pienso que no estoy en un estado fisico ideal.',
		},
		{
			oportunidad: 'Capacidad resolutiva',
			descripción:
				'Pienso que mis capacidades de analisis de información no estan en un nivel alto, noy soy capaz de desarrollar soluciones.',
		},
		{
			oportunidad: 'Reconocimiento Emocional',
			descripción:
				'No siento que soy capaz de entender mis emociones y las de personas en mi entorno, regularmente me cuesta externar mis emociones.',
		},
	])

	const [checkBoxSelected, setcheckBoxSelected] = useState([])
	const handlerChangeCheckBox = (e) => {
		console.log(e.target.value)
		var extraState = null
		if (checkBoxSelected.includes(e.target.value)) {
			extraState = checkBoxSelected.filter(
				(elemento) => elemento !== e.target.value
			)
		} else {
			extraState = checkBoxSelected.concat(e.target.value)
		}
		setcheckBoxSelected(extraState)

		if (extraState.length > 0) {
			setButtonActive(true)
		} else {
			setButtonActive(false)
		}
	}
	return (
		<div className='WhatDoiLikeActivity'>
			<ModalProvider>
				<ActivitiesLocalizationBar
					title='¿Qué me gusta?'
					variant='SelfKnowledge'
				/>
				<main className='WhatDoiLikeActivity'>
					<div className='questions'>
						<p className='systemText__instruction'>
							Deberas realizar la selección de las cosas que te agradan de ti,
							es decir, tus atributos, ademas reconoceras las cosas que quiza no
							sean de tu agrado, por ultimo elaboraras un pequeño texto en el
							que describiras una estrategia para mejorar los atributos que no
							son de tu agrado, comprendiendo que los mismos son un área de
							oportunidad para tu desarrollo.
						</p>
						<div className='formContainer'>
							<p>
								Primero, debera de seleccionar las cualidades que considere que
								se acoplan a lo que percibe de usted mismo, debera de
								seleccionar al menos un atributo que usted considere que tiene:
							</p>
							<br />
							<table className='table table-sm table-hover'>
								<thead>
									<tr>
										<th></th>
										<th>Cualidad</th>
										<th>Descripción</th>
									</tr>
								</thead>
								<tbody>
									{cualidades.map((cualidad) => (
										<tr>
											<td>
												<input
													type='checkbox'
													value={cualidad.cualidad}
													onChange={handlerChangeCheckBox}
												/>
											</td>
											<td>{cualidad.cualidad}</td>
											<td>{cualidad.descripción}</td>
										</tr>
									))}
								</tbody>
							</table>
							<button className='btn btn-primary' disabled={!buttonActive}>
								Seleccionar
							</button>
							<p>
								Ahora que ha seleccionado los atributos que considera poseer,
								debera de describir aquello que considera que no es un atributo,
								es decir, ¿Qué ve como una area de mejora?
							</p>
							<br />
							<table className='table table-sm table-hover'>
								<thead>
									<tr>
										<th></th>
										<th>Cualidad</th>
										<th>Descripción</th>
									</tr>
								</thead>
								<tbody>
									{oportunidades.map((oportunidad) => (
										<tr>
											<td>
												<input
													type='checkbox'
													value={oportunidades.oportunidad}
													onChange={handlerChangeCheckBox}
												/>
											</td>
											<td>{oportunidad.oportunidad}</td>
											<td>{oportunidad.descripción}</td>
										</tr>
									))}
								</tbody>
							</table>
							<button className='btn btn-primary' disabled={!buttonActive}>
								Seleccionar
							</button>

							<TextArea
								label='Redacta la estrategia que usarias para tomar acción en tus areas de oportunidad.'
								placeholder='Redacta aquí tu respuesta...'
								rows={4}
							/>
							<LargeButtonModal
								title={'¡Excelente, concluiste la actividad!'}
								variant='confirmation'
								buttonLabels={['Okey']}
								exitOnClickOut={false}
								onConfirmationCallback={() => {
									console.log('Finish')
								}}
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

export default WhatDoilLikeActivity
