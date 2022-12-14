// TODO: Make redirections to other activities pages

import useActivities from '../../../data/hooks/useActivities'
import CreateWeekPlanPage from './CreateWeekPlanPage'

const WeekPlanPage = () => {
	const { statusWeekPlan } = useActivities()

	if (statusWeekPlan === null) return <div>Loading...</div>

	if (statusWeekPlan === 'onTime') return <div>WeekPlan</div>

	return <CreateWeekPlanPage />
}

export default WeekPlanPage
