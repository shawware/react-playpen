class TokenApi {
	static getToken() {
		var args = {};

		// The following does not work due to a CORS restriction.
		// var url = 'https://knockknock.shawware.com.au/api/token';

		// The following returns normally, but the result is opaque.
		// var url = 'https://knockknock.shawware.com.au/api/token';
		// var.mode = 'no-cors';

		// The following works but the result is not very useful.
		var url = 'https://www.reddit.com/r/help.json';

		return fetch(url)
			.then(response => {
				// Ignore the actual response and simply random text.
				return Math.random().toString(36).substring(2, 7);
			})
			.catch(error => {
				return error;
			});
	}
}

export default TokenApi;
