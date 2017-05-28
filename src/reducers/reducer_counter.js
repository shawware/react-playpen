/*
 * Respond to actions relating to a count.
 * For relevant action types, the state will be the count itself.
 */
export default function(state = null, action) {
	switch (action.type) {
		case '@@redux/INIT':
			return 0;
		case 'INCREMENT':
			return state + 1;
	}
	return state;
}
