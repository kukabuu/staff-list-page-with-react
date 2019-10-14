class MockService {

	_apiBase = 'http://5d419aff75f67300146b405f.mockapi.io/api/users';

	// eslint-disable-next-line class-methods-use-this
	async getResource(url) {
		const res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, received ${res.status}`)
		}

		return res.json();
	}

	getAllUsers = () => {
		return this.getResource(`${this._apiBase}/users`);
	}

	getUser = (id) => {
		return this.getResource(`${this._apiBase}/users/${id}`);
	}

	getAllComments = (id) => {
		return this.getResource(`${this._apiBase}/users/${id}/Comments`);
	}
}

export default MockService;