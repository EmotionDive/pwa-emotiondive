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
}
