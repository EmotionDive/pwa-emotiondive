import { useState } from 'react'
import { useRef } from 'react'
import { useQuery } from 'react-query'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { LargeButton } from '../../../components/Buttons'
import { useModalAction } from '../../../components/Modal'
import useActivities from '../../../data/hooks/useActivities'
import useUser from '../../../data/hooks/useUser'
import ActivitiesService from '../../../fetchers/ActivitiesService'
import { CognitiveChooser } from '../components'

const ChooseCompetencePage = () => {
	const competences = useRef([])
	const navigate = useNavigate()
	const { userData } = useUser()
	const [error, setError] = useState(false)
	const { operateModal } = useModalAction()
	const { updateAll } = useActivities()
	const location = useLocation()

	const { isLoading, data } = useQuery('undoneCompetences', () =>
		ActivitiesService.getUndoneCompetences(userData.username)
	)

	const modalActivities = () => {
		ActivitiesService.registerCompetences(
			userData.username,
			competences.current
		)
			.then((res) => {
				if (res.status === 'success')
					setTimeout(() => {
						operateModal(
							'¡Listo! Ya está todo preparado para trabajar tu Inteligencia Emocional.',
							'Ahora, para empezar, vamos a ver con que actividades puedes iniciar para así preparar tu plan de esta semana.',
							'confirm',
							['¡Vamos a las Actividades!'],
							() => {
								updateAll()
								navigate('/actividades/verActividades', {
									replace: true,
								})
							},
							false
						)
					}, 400)
				else alert('Error en el servidor')
			})
			.catch(() => {
				alert('Error en el servidor')
			})
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

	if (location.state?.fromMenuPage) {
		if (isLoading) return <div>Loading...</div>
		else
			return (
				<div className='chooseCompetencesSlide'>
					<h1 className='text--big'>
						¡Es hora de elegir que competencia trabajarás!
					</h1>
					<span className='systemText__instruction'>
						Elige 2 competencias de la Inteligencia Emocional:
					</span>
					<CognitiveChooser
						onChange={(value) => {
							competences.current = value
							if (error) setError(false)
						}}
						undone={data.selected_competences}
					/>
					{error ? (
						<span className='error'>
							Porfavor, selecciona tus competencias.
						</span>
					) : null}
					<span className='text--small justifyText'>
						Te sugerimos elijas las competencias <b>autoconocimiento</b> y{' '}
						<b>autoeficacia</b> ya que son tus áreas de oportunidad con base en
						tus estadísticas.
					</span>
					<LargeButton onClick={readyButton}>Listo</LargeButton>
				</div>
			)
	} else return <Navigate to='/actividades' replace />
}

export default ChooseCompetencePage
