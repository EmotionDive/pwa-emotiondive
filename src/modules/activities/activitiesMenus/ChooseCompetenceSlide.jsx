import { useState } from 'react'
import { useRef } from 'react'
import { LargeButton } from '../../../components/Buttons'
import { useModalAction } from '../../../components/Modal'
import { CognitiveChooser } from '../components'

const ChooseCompetenceSlide = () => {
	const competences = useRef([])
	const [error, setError] = useState(false)
	const { operateModal } = useModalAction()

	const modalActivities = () => {
		setTimeout(() => {
			operateModal(
				'¡Listo! Ya está todo preparado para trabajar tu Inteligencia Emocional.',
				'Ahora, para empezar, vamos a ver con que actividades puedes iniciar para así preparar tu plan de esta semana.',
				'confirm',
				['¡Vamos a las Actividades!'],
				() => {
					console.log('Yiyi')
				},
				false
			)
		}, 400)
	}

	const readyButton = () => {
		if (competences.current.length !== 2) {
			setError(true)
		} else {
			if (error) {
				setError(false)
			}
			operateModal(
				'¿Seguro que eliges estas competencias cognitivas?',
				'Recuerda que las competencias cognitivas que te falten las trabajarás una vez que termines las actividades de las competencias que elegiste y hayas realizado nuevamente el Test IE.',
				'actions',
				['¡Sí, seguro!', 'Cancelar'],
				modalActivities
			)
		}
	}

	return (
		<div className='chooseCompetencesSlide'>
			<h1 className='text--big'>
				!Es hora de elegir que competencia trabajarás¡
			</h1>
			<span className='systemText__instruction'>
				Elige 2 competencias de la Inteligencia Emocional:
			</span>
			<CognitiveChooser
				onChange={(value) => {
					competences.current = value
					if (error) setError(false)
				}}
			/>
			{error ? (
				<span className='error'>Porfavor, selecciona tus competencias.</span>
			) : null}
			<span className='text--small justifyText'>
				Te sugerimos elijas las competencias <b>autoconocimiento</b> y{' '}
				<b>autoeficacia</b> ya que son tus áreas de oportunidad con base en tus
				estadísticas.
			</span>
			<LargeButton onClick={readyButton}>Listo</LargeButton>
		</div>
	)
}

export default ChooseCompetenceSlide
