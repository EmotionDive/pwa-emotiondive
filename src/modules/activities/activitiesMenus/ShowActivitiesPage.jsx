import { ActivityInfo, ListActivities } from '../components'
import CardActivitie from '../components/CardActivitie'
import { LargeButton } from '../../../components/Buttons'
import { useState } from 'react'
import { useQuery } from 'react-query'
import useActivities from '../../../data/hooks/useActivities'
import ActivitiesService from '../../../fetchers/ActivitiesService'
import { Navigate, useNavigate } from 'react-router-dom'

const competencesTranslation = {
	Autoconocimiento: 'SelfKnowledge',
	Autorregulación: 'SelfRegulation',
	Autoeficacia: 'SelfEfficacy',
	Empatia: 'Empathy',
}

const ShowActivitiesPage = () => {
	const [openInfoActivity, setOpenInfoActivity] = useState(false)
	const [dataActivityInfo, setDataActivityInfo] = useState({})
	const [activityCompetence, setActivityCompetence] = useState('')
	const navigate = useNavigate()
	const { competences, statusWeekPlan } = useActivities()

	const { isLoading, data, isSuccess } = useQuery(
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
	}

	if (!competences || competences.length === 0)
		return <Navigate to='/actividades' replace />

	if (isLoading || data === undefined) return <div>Loading...</div>

	if (isSuccess) {
		return (
			<div className='activitiesPage__container showActivitiesPage'>
				<span className='systemText__instruction'>
					Pulsa en alguna de las actividades para ver más detalles de la
					actividad.
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
									onClick={() => handleOpenInfo(indexCompetence, indexActivity)}
								/>
							))}
						</ListActivities>
					))}
				</div>
				{statusWeekPlan === 'onTime' ? null : (
					<LargeButton onClick={() => navigate('/actividades/planSemanal')}>
						Crear Plan Semanal
					</LargeButton>
				)}
				<ActivityInfo
					open={openInfoActivity}
					data={dataActivityInfo}
					onClickButton={() => setOpenInfoActivity(false)}
					onClickOutside={() => setOpenInfoActivity(false)}
					variant={activityCompetence}
				/>
			</div>
		)
	}
}

export default ShowActivitiesPage
