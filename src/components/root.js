import React, { Component } from 'react';
import Basic from './basic';
import B1 from './b1';
import B2 from './b2';
import B3 from '../containers/b3';
import Counter from '../containers/counter';

class Root extends Component {

	render() {
		return(
			<div>
				<Basic />
				<B1 name="Stop" />
				<B2 name="Go" />
				<B3 name="Count" />
				<Counter />
			</div>
		);
	}
}

export default Root;
