import React, { useMemo, useState } from 'react'
import useActivities from '../../../data/hooks/useActivities'
import { ActivityInfo } from '../components'
import CardActivitie from '../components/CardActivitie'
import { months, weekdays } from './data/datesInSpanish'
import { activitiesRoutes } from './data/activitiesRoutes'
import { useNavigate } from 'react-router-dom'
import useUser from '../../../data/hooks/useUser'
import doneImage from '../../../assets/images/pictures/DoneWeekplan.png'

const competencesTranslation = {
	Autoconocimiento: 'SelfKnowledge',
	Autorregulación: 'SelfRegulation',
	Autoeficacia: 'SelfEfficacy',
	Empatia: 'Empathy',
}

// TODO: INVALIDATE BUTTON WHEN DONE AND WHEN REALIZATION OF THE DAY

const ShowWeekPlanPage = () => {
	const { weekplan } = useActivities()
	const { userData } = useUser()
	const navigate = useNavigate()

	const weekplanDate = useMemo(() => {
		const date = new Date(weekplan.deadline)
		date.setDate(date.getDate() - 1)
		return `${weekdays[date.getDay()]} ${date.getDate()} de ${
			months[date.getMonth()]
		} de ${date.getFullYear()}`
	}, [weekplan.deadline])
	const allWeekPlanFinished = useMemo(
		() =>
			weekplan.activities.find((activity) => activity.done_flag === false) ===
			undefined,
		[weekplan.activities]
	)

	const [openInfoActivity, setOpenInfoActivity] = useState(false)
	const [dataActivityInfo, setDataActivityInfo] = useState({})
	const [activityCompetence, setActivityCompetence] = useState('')

	const handleOpenInfo = (indexActivity) => {
		setDataActivityInfo(weekplan.activities[indexActivity])
		setActivityCompetence(
			competencesTranslation[weekplan.activities[indexActivity].competence]
		)
		setOpenInfoActivity(true)
	}

	return (
		<div className='activitiesPage__container showActivitiesPage'>
			{allWeekPlanFinished ? (
				<div className='showActivitiesPage__doneWeekPlan'>
					<span className='text--big'>
						¡Felicidades, terminaste tu plan semanal!
					</span>
					<img src={doneImage} alt='Plan Semanal Terminado' />
					<span className='systemText__paragraph'>
						Ahora solo te resta esperar la siguiente semana para seguir
						trabajando tu Inteligencia Emocional.
					</span>
				</div>
			) : (
				<span className='systemText__instruction'>
					Pulsa en alguna de las actividades para realizarla.
				</span>
			)}
			<span className='text--small'>
				Tu plan finaliza el {weekplanDate} a las 23:59
			</span>
			<div className='showActivitiesPage__displayActivities'>
				{weekplan.activities.map((activity, indexActivity) => (
					<CardActivitie
						number={activity.activity.id_actividad}
						variant={competencesTranslation[activity.competence]}
						key={activity.activity.id_actividad}
						title={activity.activity.nombre}
						description={activity.activity.descripcion.split('\n')[0]}
						onClick={() => handleOpenInfo(indexActivity)}
						done={activity.done_flag}
					/>
				))}
			</div>
			<ActivityInfo
				open={openInfoActivity}
				data={dataActivityInfo}
				onClickButton={() => setOpenInfoActivity(false)}
				onClickOutside={() => setOpenInfoActivity(false)}
				variant={activityCompetence}
				addDoActivityButton={true}
				onClickDoActivityButton={(id) => {
					navigate(activitiesRoutes[id - 1].url, {
						state: {
							activityId: id,
							username: userData.username,
							progress: weekplan.activities.find(
								(activity) => activity.activity.id_actividad === id
							).progreso,
						},
					})
				}}
				showRealizations={true}
			/>
		</div>
	)
}

export default ShowWeekPlanPage
