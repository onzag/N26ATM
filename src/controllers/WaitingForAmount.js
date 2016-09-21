/**
 * @file Contains the waiting for amount controlle
 * @author Edward Gonzalez
 */

import React from 'react';

import WaitingForAmount from '../views/WaitingForAmount';

/** 
 * Waits for the amount to be input in order to trigger the action
 * to get a specific amount of money
 */
export default class WaitingForAmountController extends React.Component {
	static propTypes = {
		actions:  React.PropTypes.shape({
			'withdraw':React.PropTypes.func.isRequired,
			'performAbort':React.PropTypes.func.isRequired
		}).isRequired
	}

	/**
	 * Render function
	 * @return {React.Component}
	 */
	render(){
		return (<WaitingForAmount onWithdraw={this.props.actions.withdraw}
			onAbort={this.props.actions.performAbort}/>);
	}
}
