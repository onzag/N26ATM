/**
 * @file Contains the waiting for card controller that tells what to do when it's waiting for a pin input
 * @author Edward Gonzalez
 */

import React from 'react';

import WaitingForPin from '../views/WaitingForPin';

/** 
 * This is the controller class that will handle the input data
 */
export default class WaitingForPinController extends React.Component {
	static propTypes = {
		actions:  React.PropTypes.shape({
			'pinInserted':React.PropTypes.func.isRequired,
			'performAbort':React.PropTypes.func.isRequired
		}).isRequired
	}
	/**
	 * Render function
	 * @return {React.Component}
	 */
	render(){
		return (<WaitingForPin onPinInserted={this.props.actions.pinInserted} onAbort={this.props.actions.performAbort}/>);
	}
}
