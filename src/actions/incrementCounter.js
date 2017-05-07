/*
 * Accepts a counter name and creates the action to increment it.
 */
export function incrementCounter(name) {
	return {
		type:    'INCREMENT',
		counter: name
	};
}
