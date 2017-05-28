import React, { Component } from 'react';

class Basic extends Component {
	render() {
		return(
			<p className="basic">
				{this.props.text}
			</p>
		);
	}
}

export default Basic;
