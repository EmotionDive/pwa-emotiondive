import { createContext, useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import ActivitiesService from '../fetchers/ActivitiesService'
import useUser from './hooks/useUser'
import TestService from '../fetchers/TestService'

export const ActivitiesContext = createContext(null)

const ActivitiesProvider = ({ children }) => {
	const { userData } = useUser()
	//Variables
	const [competences, setCompetences] = useState(null)
	const [statusWeekPlan, setStatusWeekPlan] = useState(null)
	const [doneActivities, setDoneActivities] = useState([])
	const weekplan = useRef({})
	const [flagsActivities, setFlagsActivities] = useState({})
	const [numberOfTest, setNumberOfTest] = useState(0)
	//Loading variable
	const [isLoading, setIsLoading] = useState(true)

	const fetchAll = useCallback(async () => {
		const updateCompetences = async () => {
			await ActivitiesService.getCompetences(userData.username).then(
				async (res) => {
					if (res.status === 'success') {
						setCompetences(res.selected_competences)
						localStorage.setItem(
							'competences',
							JSON.stringify(res.selected_competences)
						)
						await ActivitiesService.areCompletedAndTimeForTest(
							userData.username,
							res.selected_competences
						).then((res2) => {
							const flags = {}
							flags.testReady = res2.test_ready_flag
							flags.timeForCompetences = Object.values(
								res2.competences_state
							).every((competence) => competence.status === 'complete')
							setFlagsActivities(flags)
							localStorage.setItem('flagsActivities', JSON.stringify(flags))
						})
					}
				}
			)
		}

		const updateWeekPlan = async () => {
			await ActivitiesService.getWeekPlan(userData.username)
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

		const updateDoneActivities = async () => {
			await ActivitiesService.activitiesCompletedByTheUser(userData.username)
				.then((res) => {
					if (res.status === 'success') {
						setDoneActivities(res.activities_by_user)
						localStorage.setItem(
							'doneActivities',
							JSON.stringify(res.activities_by_user)
						)
					} else {
						localStorage.setItem('doneActivities', doneActivities)
					}
				})
				.catch(() => {
					localStorage.setItem('doneActivities', doneActivities)
				})
		}

		const numberOfTest = async () => {
			await TestService.getStatistics(userData.username)
				.then((res) => {
					setNumberOfTest(res.length)
					localStorage.setItem('noTest', res.length)
				})
				.catch(localStorage.setItem('noTest', numberOfTest))
		}

		setIsLoading(true)
		await updateCompetences()
		await updateWeekPlan()
		await updateDoneActivities()
		await numberOfTest()
		setIsLoading(false)
		console.log('updateActivities')
	}, [doneActivities, userData])

	useEffect(() => {
		//If internet
		if (userData !== null) {
			fetchAll()
		}
	}, [userData])

	return (
		<ActivitiesContext.Provider
			value={{
				competences,
				statusWeekPlan,
				weekplan,
				doneActivities,
				flagsActivities,
				isLoading,
				fetchAll,
				numberOfTest,
			}}
		>
			{children}
		</ActivitiesContext.Provider>
	)
}

ActivitiesProvider.propTypes = {
	children: PropTypes.any,
}

export default ActivitiesProvider
