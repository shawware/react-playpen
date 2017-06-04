import { LOAD_TOKEN_SUCCESS } from '../actions/loadToken';

/*
 * Default token.
 */
const initialToken = '<undefined>';

/*
 * Respond to actions relating to a token.
 */
export default function(state = initialToken, action) {
	switch (action.type) {
		case LOAD_TOKEN_SUCCESS:
			return action.token;
	}
	return state;
}
