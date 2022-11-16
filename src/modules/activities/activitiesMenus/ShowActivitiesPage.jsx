import { ListActivities } from '../components'
import CardActivitie from '../components/CardActivitie'
import { LargeButton } from '../../../components/Buttons'
const ShowActivitiesPage = () => {
	return (
		<div className='activitiesPage__container showActivitiesPage'>
			<span className='systemText__instruction'>
				Pulsa en alguna de las actividades para ver más detalles de la
				actividad.
			</span>
			<div className='showActivitiesPage__displayActivities'>
				<ListActivities variant='SelfKnowledge'>
					<CardActivitie
						number={1}
						variant='SelfKnowledge'
						title='¡Identifica emociones faciales!'
						description='Aprende a identificar las emociones faciales de las personas.'
					/>
					<CardActivitie
						variant='SelfKnowledge'
						number={2}
						title='¡Identifica emociones faciales!'
						description='Aprende a identificar las emociones faciales de las personas.'
					/>
					<CardActivitie
						variant='SelfKnowledge'
						number={3}
						title='¡Identifica emociones faciales!'
						description='Aprende a identificar las emociones faciales de las personas.'
					/>
					<CardActivitie
						variant='SelfKnowledge'
						number={4}
						title='¡Identifica emociones faciales!'
						description='Aprende a identificar las emociones faciales de las personas.'
					/>
					<CardActivitie
						variant='SelfKnowledge'
						optional
						title='¡Identifica emociones faciales!'
						description='Aprende a identificar las emociones faciales de las personas.'
					/>
				</ListActivities>
				<ListActivities variant='SelfEfficacy'>
					<CardActivitie
						number={1}
						variant='SelfEfficacy'
						title='¡Identifica emociones faciales!'
						description='Aprende a identificar las emociones faciales de las personas.'
					/>
					<CardActivitie
						variant='SelfEfficacy'
						number={2}
						title='¡Identifica emociones faciales!'
						description='Aprende a identificar las emociones faciales de las personas.'
					/>
					<CardActivitie
						variant='SelfEfficacy'
						number={3}
						title='¡Identifica emociones faciales!'
						description='Aprende a identificar las emociones faciales de las personas.'
					/>
					<CardActivitie
						variant='SelfEfficacy'
						number={4}
						title='¡Identifica emociones faciales!'
						description='Aprende a identificar las emociones faciales de las personas.'
					/>
					<CardActivitie
						variant='SelfEfficacy'
						optional
						title='¡Identifica emociones faciales!'
						description='Aprende a identificar las emociones faciales de las personas.'
					/>
				</ListActivities>
			</div>
			<LargeButton>Crear Plan Semanal</LargeButton>
		</div>
	)
}

export default ShowActivitiesPage
