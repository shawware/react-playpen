import TokenApi from '../api/tokenApi';

export const LOAD_TOKEN_SUCCESS = 'LOAD_TOKEN_SUCCESS';

export function loadTokenSuccess(token) {
	return {
		type: LOAD_TOKEN_SUCCESS,
		token: token
	}
}

export function loadToken() {
	return function(dispatch) {
		return TokenApi.getToken()
			.then(token => {
				dispatch(loadTokenSuccess(token));
			})
			.catch(error => {
				throw(error);
			});
	};
}
