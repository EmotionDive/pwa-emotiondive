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
	const [weekplan, setWeekplan] = useState({})
	const [flagsActivities, setFlagsActivities] = useState({})
	const [numberOfTest, setNumberOfTest] = useState(0)
	//Loading variable
	const [isLoading, setIsLoading] = useState(true)

	const fetchAll = useCallback(async () => {
		const updateCompetences = async () => {
			await ActivitiesService.getCompetences(userData.username).then(
				async (res) => {
					const flags = {}
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
							flags.testReady = res2.test_ready_flag
							flags.timeForCompetences = Object.values(
								res2.competences_state
							).every((competence) => competence.status === 'complete')
						})
						await ActivitiesService.allCompetencesCompleted(
							userData.username
						).then((res3) => {
							flags.allCompleted = res3.test_ready_flag
						})
						setFlagsActivities(flags)
						localStorage.setItem('flagsActivities', JSON.stringify(flags))
					}
				}
			)
		}

		const updateWeekPlan = async () => {
			await ActivitiesService.getWeekPlan(userData.username)
				.then((res) => {
					let status = ''
					if (res.status === 'success' && res.deadline !== '') {
						const actualDate = new Date()
						const deadlineDate = new Date(res.deadline)

						if (actualDate.getTime() > deadlineDate.getTime()) {
							status = 'expired'
							setWeekplan({})
							localStorage.setItem('weekplan', JSON.stringify({}))
						} else {
							status = 'onTime'
							setWeekplan(res)
							localStorage.setItem('weekplan', JSON.stringify(res))
						}
					} else {
						status = 'none'
					}
					setStatusWeekPlan(status)
					localStorage.setItem('statusWeekPlan', JSON.stringify(status))
				})
				.catch(() => {
					setStatusWeekPlan('none')
					localStorage.setItem('statusWeekPlan', 'none')
					localStorage.setItem('weekplan', JSON.stringify({}))
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
		await numberOfTest()
		await updateCompetences()
		await updateWeekPlan()
		await updateDoneActivities()
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
