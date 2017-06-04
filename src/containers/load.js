import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadToken } from '../actions/loadToken';

/*
 * A button as a container
 */
class Load extends Component {

	render() {
		// Create a function to call the given load action
		return(
			<button onClick={() => this.props.loader()}>
				{this.props.text}
			</button>
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

/*
 * Bind the load token action to the token loader property.
 */
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ loader : loadToken }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Load);
