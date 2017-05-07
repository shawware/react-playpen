import React, { Component } from 'react';
import { connect } from 'react-redux';

/*
 * A simple presentation object: presents the value of a count.
 */
class Counter extends Component {

	render() {
		return (
			<div>
				<p><strong>Count: {this.props.count}</strong></p>
			</div>
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

export default connect(mapStateToProps)(Counter);
