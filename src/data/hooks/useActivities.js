import { useCallback, useContext, useEffect, useState } from 'react'
import ActivitiesService from '../../fetchers/ActivitiesService'
import { ActivitiesContext } from '../ActivitiesProvider'
import useUser from './useUser'

export default function useActivities() {
	const { competences, setCompetences } = useContext(ActivitiesContext)
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

	useEffect(() => {
		//If internet
		if (!competences) updateCompetences()
	}, [competences])

	return {
		competences,
		updateCompetences,
		isLoading,
	}
}
