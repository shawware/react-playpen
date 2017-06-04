import { combineReducers } from 'redux';

import CounterReducer from './reducer_counter';
import TokenReducer from './reducer_token';

const rootReducer = combineReducers({
	counts: CounterReducer,
	token:  TokenReducer
});

export default rootReducer;
