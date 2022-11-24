import { clientRequest } from './axiosClients'

export default class TestService {
	static createTest(username, answers) {
		return clientRequest({
			method: 'post',
			url: `/test/${username}`,
			data: {
				answers,
			},
		})
	}

	static getStatistics(username) {
		return clientRequest({
			method: 'get',
			url: `/test/${username}`,
		})
	}
}
