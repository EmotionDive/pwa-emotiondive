import { useState } from 'react'
import ActivitiesMenuPage from './activitiesMenus/ActivitiesMenuPage'
import { ActivitiesTabNav } from './components'
import WeekPlanPage from './weekPlan/WeekPlanPage'

const ActivitiesPage = () => {
	const [activeTab, setActiveTab] = useState('activities')

	return (
		<div className='activitiesPage'>
			<ActivitiesTabNav value={activeTab} onChange={setActiveTab} />
			<div className='activitiesPage__content'>
				{activeTab === 'activities' ? <ActivitiesMenuPage /> : <WeekPlanPage />}
			</div>
		</div>
	)
}

export default ActivitiesPage
