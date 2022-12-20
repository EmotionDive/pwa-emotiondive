import React, { useMemo, useState } from 'react'
import useActivities from '../../../data/hooks/useActivities'
import { ActivityInfo } from '../components'
import CardActivitie from '../components/CardActivitie'
import { months, weekdays } from './data/datesInSpanish'
import { activitiesRoutes } from './data/activitiesRoutes'
import { useNavigate } from 'react-router-dom'
const competencesTranslation = {
	Autoconocimiento: 'SelfKnowledge',
	Autorregulación: 'SelfRegulation',
	Autoeficacia: 'SelfEfficacy',
	Empatia: 'Empathy',
}

// TODO: INVALIDATE BUTTON WHEN DONE AND WHEN REALIZATION OF THE DAY

const ShowWeekPlanPage = () => {
	const { weekplan } = useActivities()
	const weekplanDate = useMemo(() => {
		const date = new Date(weekplan.deadline)
		return `${weekdays[date.getDay()]} ${date.getDate()} de ${
			months[date.getMonth()]
		} de ${date.getFullYear()}`
	}, [weekplan.deadline])
	const navigate = useNavigate()

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
			<span className='systemText__instruction'>
				Pulsa en alguna de las actividades para realizarla.
			</span>
			<span className='text--small'>Tu plan finaliza el {weekplanDate}</span>
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
					navigate(activitiesRoutes[id - 1].url)
				}}
				showRealizations={true}
			/>
		</div>
	)
}

export default ShowWeekPlanPage
