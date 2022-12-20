import { useEffect, useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import img from '../../../assets/images/pictures/WeekPlan.png'
import { LargeButton } from '../../../components/Buttons'
import { useModalAction } from '../../../components/Modal'
import useActivities from '../../../data/hooks/useActivities'
import useUser from '../../../data/hooks/useUser'
import ActivitiesService from '../../../fetchers/ActivitiesService'
import { ActivityInfo, ListActivities } from '../components'
import CardActivitie from '../components/CardActivitie'
import { months, weekdays } from './data/datesInSpanish'

const weekPlanDates = () => {
	const start = new Date()
	const end = new Date()
	end.setDate(start.getDate() + 7)

	const weekPlanStart = `${weekdays[start.getDay()]} ${start.getDate()} de ${
		months[start.getMonth()]
	} de ${start.getFullYear()}`
	const weekPlanEnd = `${weekdays[end.getDay()]} ${end.getDate()} de ${
		months[end.getMonth()]
	} de ${end.getFullYear()}`
	return {
		weekPlanStart,
		weekPlanEnd,
	}
}

const competencesTranslation = {
	Autoconocimiento: 'SelfKnowledge',
	Autorregulación: 'SelfRegulation',
	Autoeficacia: 'SelfEfficacy',
	Empatia: 'Empathy',
}

const CreateWeekPlanPage = () => {
	const { weekPlanStart, weekPlanEnd } = useMemo(() => weekPlanDates(), [])
	const [isIntro, setIsIntro] = useState(true)
	const [selectedActivities, setSelectedActivities] = useState([])
	const [availableForSelection, setAvailableForSelection] = useState()
	const { operateModal } = useModalAction()
	const { userData } = useUser()
	const navigate = useNavigate()

	const [openInfoActivity, setOpenInfoActivity] = useState(false)
	const [dataActivityInfo, setDataActivityInfo] = useState({})
	const [activityCompetence, setActivityCompetence] = useState('')
	const [addOrDelete, setAddOrDelete] = useState('true')
	const { competences, statusWeekPlan, doneActivities } = useActivities()

	const { data } = useQuery(
		'getActivities',
		() => ActivitiesService.getActivities(competences),
		{
			initialData: () => {
				return {
					competence_activities: [],
				}
			},
			enabled: competences !== null && competences.length > 0,
		}
	)

	const handleOpenInfo = (indexCompetence, indexActivity) => {
		setDataActivityInfo(
			data.competence_activities[indexCompetence].activities[indexActivity]
		)
		setActivityCompetence(
			competencesTranslation[
				data.competence_activities[indexCompetence].competence
			]
		)
		setOpenInfoActivity(true)
		setAddOrDelete(
			selectedActivities.includes(
				data.competence_activities[indexCompetence].activities[indexActivity]
					.activity.id_actividad
			)
				? 'false'
				: 'true'
		)
	}

	const handleUpdateSelectedActivities = (idActivity) => {
		const selections = [...selectedActivities]

		const alreadyChoosed = selections.indexOf(idActivity)

		if (alreadyChoosed !== -1) {
			//DELETE
			//TODO: CHANGE WITH NEXT_IDACTIVITY
			if (selections.indexOf(idActivity + 1) !== -1) {
				operateModal(
					'Ups! No puedes quitar esta actividad',
					'Para poder quitar esta actividad de tu plan primero debes de eliminar la actividad seriada (siguiente) que también está en tu plan.',
					'confirm',
					['De acuerdo'],
					() => {},
					true
				)
				return
			}

			selections.splice(alreadyChoosed, 1)
			const copyAvailable = [...availableForSelection]
			//TODO: CHANGE WITH NEXT_IDACTIVITY
			const nextActivityAvailable = copyAvailable.indexOf(idActivity + 1)
			if (nextActivityAvailable !== -1) {
				copyAvailable.splice(nextActivityAvailable, 1)
				setAvailableForSelection(copyAvailable)
			}
		} else {
			if (selections.length === 5)
				operateModal(
					'¡Ups, ya son muchas actividades!',
					'Es ideal que poco a poco semanalmente vayas completando las actividades para tener un mejor aprendizaje y desarrollo de tu Inteligencia Emocional. Quita de tu plan otra actividad para seleccionar la que acabas de elegir.',
					'confirm',
					['¡De acuerdo!'],
					() => {},
					true
				)
			else {
				//ADD
				selections.push(idActivity)
				//TODO: Change with NEXT_IDACTIVITY
				setAvailableForSelection([...availableForSelection, idActivity + 1])
			}
		}
		setSelectedActivities(selections)
	}

	const createWeekPlan = () => {
		ActivitiesService.createWeekPlan(userData.username, selectedActivities)
			.then((res) => {
				console.log(res)
				if (res.status === 'success')
					setTimeout(() => {
						operateModal(
							'¡Excelente, tu plan comienza ahora!',
							`Tienes hasta el ${weekPlanEnd} para terminar tus actividades. ¡Mucho éxito trabajando tu Inteligencia Emocional!`,
							'confirm',
							['¡Empecemos ya!'],
							() => {
								navigate('/actividades', {
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

	const searchFirstAvailables = () => {
		const array = []

		//First competence
		const first = data.competence_activities[0].activities.find(
			(element) => !doneActivities.includes(element.activity.id_actividad)
		)
		//Second competence
		const second = data.competence_activities[1].activities.find(
			(element) => !doneActivities.includes(element.activity.id_actividad)
		)

		if (first !== undefined) array.push(first.activity.id_actividad)
		if (second !== undefined) array.push(second.activity.id_actividad)

		return array
	}

	useEffect(() => {
		if (statusWeekPlan === 'expired')
			operateModal(
				'Se acabó tu plan semanal',
				'Llegó la hora de una nueva semana. Si no acabaste alguna actividad podrás incluirla en este nuevo plan. ¡Mucho éxito!',
				'confirm',
				['¡Vamos allá!'],
				() => {},
				true
			)
		// When first render
		setAvailableForSelection(searchFirstAvailables())
	}, [data])

	return (
		<>
			{isIntro ? (
				<div className='activitiesPage__container createWeekPlan'>
					<h1>¡Es hora de crear tu nuevo Plan Semanal!</h1>
					<img src={img} alt='PLan Semanal' />
					<span className='systemText__instruction'>
						Si inicias en este momento las fechas quedarían de la siguiente
						manera:
					</span>
					<div>
						<p>
							<b>Inicio: </b>
							{weekPlanStart}
						</p>
						<p>
							<b>Fin: </b>
							{weekPlanEnd}
						</p>
					</div>
					<LargeButton onClick={() => setIsIntro(false)}>
						¡Vamos a crearlo!
					</LargeButton>
				</div>
			) : (
				<div className='activitiesPage__container showActivitiesPage'>
					<span className='systemText__instruction'>
						Pulsa en alguna de las actividades y seleccionala para agregar tu
						plan semanal.
					</span>
					<span className='text--small'>
						Recuerda que debes de elegir mínimo 2 actividades y máximo 5.
					</span>
					<div className='showActivitiesPage__displayActivities'>
						{data.competence_activities.map((competence, indexCompetence) => (
							<ListActivities
								variant={competencesTranslation[competence.competence]}
								key={competence.competence}
							>
								{competence.activities.map((activity, indexActivity) => (
									<CardActivitie
										number={activity.activity.id_actividad}
										variant={competencesTranslation[competence.competence]}
										key={activity.activity.id_actividad}
										title={activity.activity.nombre}
										description={activity.activity.descripcion.split('\n')[0]}
										onClick={() =>
											handleOpenInfo(indexCompetence, indexActivity)
										}
										choosed={selectedActivities.includes(
											activity.activity.id_actividad
										)}
										disabled={
											!availableForSelection.includes(
												activity.activity.id_actividad
											)
										}
									/>
								))}
							</ListActivities>
						))}
					</div>
					<LargeButton
						disabled={selectedActivities.length < 2}
						onClick={() =>
							operateModal(
								'¿Seguro de tu elección de actividades?',
								'Una vez iniciado el plan no podrás cambiar tus actividades y solamente al terminar el plan podrás hacer otras actividades.',
								'actions',
								['¡Si, seguro!', 'Regresar'],
								createWeekPlan,
								false
							)
						}
					>
						Finalizar
					</LargeButton>
					<ActivityInfo
						open={openInfoActivity}
						data={dataActivityInfo}
						onClickButton={() => setOpenInfoActivity(false)}
						onClickOutside={() => setOpenInfoActivity(false)}
						variant={activityCompetence}
						addToWeekPlanButton={addOrDelete}
						onClickAddToWeekPlanButton={(value) => {
							handleUpdateSelectedActivities(value)
							setOpenInfoActivity(false)
						}}
					/>
				</div>
			)}
		</>
	)
}

export default CreateWeekPlanPage
