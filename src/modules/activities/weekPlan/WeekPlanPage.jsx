// TODO: Make redirections to other activities pages

import useActivities from '../../../data/hooks/useActivities'
import CreateWeekPlanPage from './CreateWeekPlanPage'
import ShowWeekPlanPage from './ShowWeekPlanPage'

const WeekPlanPage = () => {
	const { statusWeekPlan } = useActivities()

	if (statusWeekPlan === null) return <div>Loading...</div>

	if (statusWeekPlan === 'onTime') return <ShowWeekPlanPage />

	return <CreateWeekPlanPage />
}

export default WeekPlanPage
