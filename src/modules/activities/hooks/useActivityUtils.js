import { useLocation, useNavigate } from 'react-router-dom'
import ActivitiesService from '../../../fetchers/ActivitiesService'

const useActivityUtils = () => {
	const location = useLocation()
	const navigate = useNavigate()

	const completeActivity = () => {
		ActivitiesService.activityCompleted(
			location.state.username,
			location.state.activityId
		)
		navigate('/', { replace: true })
	}

	return {
		accessFromMenu: location.state !== null,
		numberOfRealization: location.state?.progress,
		completeActivity,
	}
}

export default useActivityUtils
