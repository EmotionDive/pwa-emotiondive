import axios from 'axios'
import config from '../../config'

const client = axios.create({
	baseURL: config.apiURL,
	headers: {
		'Content-Type': 'application/json',
	},
})

export const clientRequest = (options) =>
	client(options)
		.then((response) => response.data)
		.catch((error) => error.response)
