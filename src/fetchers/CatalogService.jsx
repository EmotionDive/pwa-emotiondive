import { clientRequest } from './axiosClients'

export default class CatalogService {
	static getHousingSituations() {
		return clientRequest({
			method: 'get',
			url: `/housing_situations`,
		})
	}
}
