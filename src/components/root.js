import React, { Component } from 'react';
import Basic from './basic';
import B1 from './b1';
import B2 from './b2';

class Root extends Component {

	render() {
		return(
			<div>
			  <Basic />
			  <B1 name="Stop" />
			  <B2 name="Go" />
			</div>
		);
	}
}

export default Root;
