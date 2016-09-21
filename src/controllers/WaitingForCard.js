/**
 * @file Contains the waiting for card controller that tells what to do when it's waiting for a card
 * @author Edward Gonzalez
 */

import React from 'react';

import * as States from '../constants/States';
import * as AbortReasons from '../constants/AbortReasons';
import * as WithdrawFailReasons from '../constants/WithdrawFailReasons';

import WaitingForCard from '../views/WaitingForCard';

/** 
 * This is the controller class that handles such
 */
export default class WaitingForCardController extends React.Component {
	static propTypes = {
		ATMState: React.PropTypes.shape({
			'state':React.PropTypes.oneOf(Object.keys(States)).isRequired,
			'pinAttempts':React.PropTypes.number.isRequired,
			'withdrawAttempts':React.PropTypes.number.isRequired,
			'abortReason':React.PropTypes.oneOf(Object.keys(AbortReasons)),
			'withdrawFailReason':React.PropTypes.oneOf(Object.keys(WithdrawFailReasons))
		})
	}
	/**
	 * Render function
	 * @returns {React.Component}
	 */
	render(){
		return (<WaitingForCard onCardInserted={this.props.actions.cardInserted}/>);
	}
}
