import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { incrementCounter } from '../actions/incrementCounter';

/*
 * A button as a container
 */
class B3 extends Component {

	render() {
		// Create a function to call the given incrementor action, passing it the counter name.
		return(
			<button onClick={() => this.props.incrementor(this.props.name)}>
				{this.props.text}
			</button>
		);
	}
}

/*
 * Extract the elements of the application state we're interested in:
 *
 *  - the count
 */
function mapStateToProps(state) {
	return {
		count: state.count
	};
}

/*
 * Bind the increment counter action to the incrementor property.
 */
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ incrementor : incrementCounter }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(B3);
