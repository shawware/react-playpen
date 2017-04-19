import React, { Component } from 'react';

class B2 extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			name: this.props.name
		};
	}

	handleClick() {
		console.log(this.state.name + " clicked");
	}

	render() {
		return(
			<button onClick={this.handleClick}>
				{this.state.name}
			</button>
		);
	}
}

export default B2;
