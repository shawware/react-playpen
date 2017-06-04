import React, { Component } from 'react';
import Basic from './basic';
import B1 from './b1';
import B2 from './b2';
import B3 from '../containers/b3';
import Counter from '../containers/counter';
import Load from '../containers/load';
import Token from '../containers/token';

class Root extends Component {

	render() {
		return(
			<div>
				<Basic text="Welcome" />
				<B1 name="Stop" />
				<B2 name="Go" />
				<B3 text="Drink Beer" name="beer" />
				<B3 text="Drink Wine" name="wine" />
				<Load text="Load Token" />
				<Counter text="Beers Drunk" name="beer" />
				<Counter text="Wines Drunk" name="wine" />
				<Token text="Token" />
			</div>
		);
	}
}

export default Root;
