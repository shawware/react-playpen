import React, { Component } from 'react';

class B1 extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		console.log(this.props.name + " clicked");
	}

	render() {
		return(
			<button onClick={this.handleClick}>
				{this.props.name}
			</button>
		);
	}
}

export default B1;
