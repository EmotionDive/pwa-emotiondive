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

	static getUserData(email) {
		return clientRequest({
			method: 'get',
			url: `/get_user/${email}`,
		})
	}

	static verifyUsernameAvailability(username) {
		return clientRequest({
			method: 'get',
			url: `/verification/username_state/${username}`,
		})
	}

	static sendEmail(email) {
		return clientRequest({
			method: 'get',
			url: `/verification/send_verify_mail/${email}`,
		})
	}

	static verifyEmail(code) {
		return clientRequest({
			method: 'post',
			url: '/verification/verify_token',
			data: {
				code,
			},
		})
	}
}
