import { clientRequest } from './axiosClients'

export default class UserService {
	static getAccountStatus(email) {
		return clientRequest({
			method: 'get',
			url: `/authorize/${email}`,
		})
	}

	static registerUser(username, data) {
		return clientRequest({
			method: 'post',
			url: `/users/${username}`,
			data: data,
		})
	}
}
