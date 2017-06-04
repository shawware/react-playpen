// Define the Increment type.
export const INCREMENT_COUNTER = 'INCREMENT';

/*
 * Accepts a counter name and creates the action to increment it.
 */
export function incrementCounter(name) {
	return {
		type:    INCREMENT_COUNTER,
		counter: name
	};
}
