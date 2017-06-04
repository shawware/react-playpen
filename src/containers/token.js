import React, { Component } from 'react';
import { connect } from 'react-redux';

class Token extends Component {
	render() {
		return(
			<p className="token">
				{this.props.text}: {this.props.token}
			</p>
		);
	}
}

/*
 * Extract the elements of the application state we're interested in:
 *
 *  - the token
 */
function mapStateToProps(state) {
	return {
		token: state.token
	};
}

export default connect(mapStateToProps)(Token);
