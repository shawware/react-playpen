import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Root from './components/root';
import reducers from './reducers';

// Build a store to hold the state.
var store = createStore(
	reducers,
	applyMiddleware(thunk)
);

// If we want to access the state here, this is how get to it.
//var state = store.getState();

// Load our Root element at the element with class sw-root.
ReactDOM.render(
	<Provider store={store}>
		<Root />
	</Provider>,
	document.querySelector('.sw-root')
);
