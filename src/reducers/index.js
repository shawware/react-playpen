import { combineReducers } from 'redux';

import CounterReducer from './reducer_counter';

const rootReducer = combineReducers({
	counts: CounterReducer
});

export default rootReducer;
