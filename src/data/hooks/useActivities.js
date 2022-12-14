import { useCallback, useContext, useEffect, useState } from 'react'
import ActivitiesService from '../../fetchers/ActivitiesService'
import { ActivitiesContext } from '../ActivitiesProvider'
import useUser from './useUser'

export default function useActivities() {
	const {
		competences,
		setCompetences,
		statusWeekPlan,
		setStatusWeekPlan,
		weekplan,
	} = useContext(ActivitiesContext)
	const [isLoading] = useState(true)
	const { userData } = useUser()

	const updateCompetences = () => {
		ActivitiesService.getCompetences(userData.username).then((res) => {
			if (res.status === 'success') {
				setCompetences(res.selected_competences)
				localStorage.setItem(
					'competences',
					JSON.stringify(res.selected_competences)
				)
			}
		})
	}

	const updateWeekPlan = () => {
		ActivitiesService.getWeekPlan(userData.username)
			.then((res) => {
				let status = ''
				if (res.status === 'success') {
					const actualDate = new Date()
					const deadlineDate = new Date(res.deadline)

					if (actualDate.getTime() > deadlineDate.getTime()) {
						status = 'expired'
						weekplan.current = {}
					} else {
						status = 'onTime'
						weekplan.current = res
					}
				} else {
					status = 'none'
				}
				setStatusWeekPlan(status)
				localStorage.setItem('statusWeekPlan', JSON.stringify(status))
				localStorage.setItem('weekplan', JSON.stringify(weekplan.current))
			})
			.catch(() => {
				setStatusWeekPlan('none')
				weekplan.current = {}
				localStorage.setItem('statusWeekPlan', 'none')
				localStorage.setItem('weekplan', JSON.stringify(weekplan.current))
			})
	}

	useEffect(() => {
		//If internet
		if (!competences) updateCompetences()
		updateWeekPlan()
	}, [competences, weekplan, statusWeekPlan])

	return {
		competences,
		updateCompetences,
		weekplan: weekplan.current,
		statusWeekPlan,
		isLoading,
	}
}
