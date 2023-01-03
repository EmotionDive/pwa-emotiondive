import React from 'react'
import { ActivitiesLocalizationBar } from '../../../../components/LocalizationBar'
import {
	LargeButtonModal,
	ModalAction,
	ModalProvider,
} from '../../../../components/Modal'
import { TextArea } from '../../../../components/Forms'
import useActivityUtils from '../../hooks/useActivityUtils'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'

const WhatDoilLikeActivity = () => {
	const { accessFromMenu, completeActivity } = useActivityUtils()

	const [cualidades] = useState([
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
	const [oportunidades] = useState([
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
	const [text1, setText1] = useState('')

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
	}

	if (!accessFromMenu) return <Navigate to='/' replace />

	return (
		<div className='SelfEfficacyActivity '>
			<ModalProvider>
				<ActivitiesLocalizationBar
					title='¿Qué me gusta?'
					variant='SelfKnowledge'
				/>
				<main className='successesAndFailuresActivity'>
					<div className='questions'>
						<p className='systemText__instruction'>
							Deberás realizar la selección de las cosas que te agradan de tí,
							es decir, tus atributos, además reconocerás las cosas que quizá no
							sean de tu agrado, por último elaborarás un pequeño texto en el
							que describirás una estrategía para mejorar los atríbutos que no
							son de tu agrado, comprendiendo que los mismos son un área de
							oportunidad para tu desarrollo.
						</p>
						<div className='formContainer'>
							<p>
								Primero, deberás de seleccionar las cualidades que consideres
								que se acoplan a lo que percibes de tí mismo, deberás de
								seleccionar al menos un atributo que consideres que tienes:
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
									{cualidades.map((cualidad, key) => (
										<tr key={key}>
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
							<p>
								Ahora que has seleccionado los atríbutos que consideras poseer,
								deberás describir aquellos que consideras que no son un
								atributo, es decir, ¿Qué ves como una área de mejora?
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
									{oportunidades.map((oportunidad, key) => (
										<tr key={key}>
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
							<TextArea
								label='Redacta la estrategia que usarias para tomar acción en tus areas de oportunidad.'
								placeholder='Redacta aquí tu respuesta...'
								rows={4}
								value={text1}
								onChange={(e) => setText1(e.target.value)}
							/>
							<LargeButtonModal
								title={'¡Excelente, concluiste la actividad!'}
								info='Reconocer cuales son tus mejores atributos y cuales son tus áreas de mejora te ayudan a hacerte consciente de tu estado actual y el cómo manejas todo tipo de situaciones. Realizar esta práctica de autoconocimiento de forma regular nos permite identificar cambios en nosotros y apoyarnos en todo momento.'
								variant='confirmation'
								buttonLabels={['Okey']}
								exitOnClickOut={false}
								onConfirmationCallback={completeActivity}
								disabled={text1.length < 30}
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
