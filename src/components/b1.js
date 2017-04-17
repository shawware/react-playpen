import React, { Component } from 'react';

class B1 extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.buttonName = props.name;
	}

	handleClick() {
		console.log(this.buttonName + " clicked");
	}

	render() {
		return(
			<button onClick={this.handleClick}>
				{this.buttonName}
			</button>
		);
	}
}

export default B1;
