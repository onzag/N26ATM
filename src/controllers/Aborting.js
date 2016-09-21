/**
 * @file Contains the aborting controller that shows a message as well as tells to retrieve the card
 * @author Edward Gonzalez
 */

import React from 'react';

import * as AbortReasons from '../constants/AbortReasons';
import Aborting from '../views/Aborting';

/** 
 * This is the controller class that will handle the aborting operation
 */
export default class AbortingController extends React.Component {
	static propTypes = {
		actions:  React.PropTypes.shape({
			'completeAbort':React.PropTypes.func.isRequired
		}).isRequired,
		ATMState: React.PropTypes.shape({
			'abortReason':React.PropTypes.oneOf(Object.keys(AbortReasons)).isRequired
		}).isRequired
	}
	/**
	 * Render function
	 * @return {React.Component}
	 */
	render(){
		return (<Aborting reason={this.props.ATMState.abortReason} onAbortCompleted={this.props.actions.completeAbort}/>);
	}
}
