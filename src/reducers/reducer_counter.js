import { INCREMENT_COUNTER } from '../actions/incrementCounter';

/*
 * Manage the state of all the counts.
 */
const initialCounts = {};

/*
 * Respond to actions relating to a count.
 * For relevant action types, the state will be the counts object itself.
 */
export default function(state = initialCounts, action) {
	switch (action.type) {
		case INCREMENT_COUNTER:
			// At this point we have received state.counts!
			// Remember, you must not mutate the argument to a reducer, so we create a copy.
			var updatedCounts = Object.assign({}, state);

			// We then increment the particular count
			if (action.counter in updatedCounts) {
				updatedCounts[action.counter]++;
			} else {
				updatedCounts[action.counter] = 1;
			}

			// And return the updated state
			return updatedCounts;
	}
	return state;
}
