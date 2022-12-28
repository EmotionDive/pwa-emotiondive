import { clientRequest } from './axiosClients'

const competencesTranslation = {
	SelfKnowledge: 'Autoconocimiento',
	SelfRegulation: 'Autorregulacion',
	SelfEfficacy: 'Autoeficacia',
	Empathy: 'Empatia',
}

export default class ActivitiesService {
	static getCompetences(username) {
		return clientRequest({
			method: 'get',
			url: `/competences/${username}`,
		})
	}

	static getUndoneCompetences(username) {
		return clientRequest({
			method: 'get',
			url: `/competences/undone/${username}`,
		})
	}

	static registerCompetences(username, competences) {
		const EScompetences = competences.map(
			(competence) => competencesTranslation[competence]
		)

		return clientRequest({
			method: 'post',
			url: `/competences/${username}`,
			data: {
				competences: EScompetences,
			},
		})
	}

	static getActivities(competences) {
		return clientRequest({
			method: 'post',
			url: '/activities/description/by_competence',
			data: {
				competences: competences,
			},
		})
	}

	static activitiesCompletedByTheUser(username) {
		return clientRequest({
			method: 'get',
			url: `/activities/completed/by_user/${username}`,
		})
	}

	static getWeekPlan(username) {
		return clientRequest({
			method: 'get',
			url: `/weekly_plan/${username}`,
		})
	}

	static createWeekPlan(username, activities) {
		return clientRequest({
			method: 'post',
			url: `/weekly_plan/${username}`,
			data: {
				activities: activities,
			},
		})
	}

	static areCompletedAndTimeForTest(username, competences) {
		return clientRequest({
			method: 'post',
			url: `/activities/competence_completed/by_user/${username}`,
			data: {
				competences: competences,
				test_flag: true,
			},
		})
	}

	static activityCompleted(username, activityId) {
		const progress = clientRequest({
			method: 'post',
			url: `/weekly_plan/${username}/activity_progress/${activityId}`,
		})

		const realizationDate = clientRequest({
			method: 'post',
			url: `/weekly_plan/${username}/activity_realization/${activityId}`,
		})

		return Promise.all([progress, realizationDate])
	}
}
