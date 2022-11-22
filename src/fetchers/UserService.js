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

	static verifyUsernameAvailability(username) {
		return clientRequest({
			method: 'get',
			url: `/verification/username_state/${username}`,
		})
	}

	static sendEmail(username) {
		return clientRequest({
			method: 'get',
			url: `/verification/verify_mail/${username}`,
		})
	}

	static verifyEmail(username) {
		return clientRequest()
	}
}
