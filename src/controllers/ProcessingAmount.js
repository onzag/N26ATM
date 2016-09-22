/**
 * @file Contains the processing amount controller
 * @author Edward Gonzalez
 */

import React from 'react';

import ProcessingAmount from '../views/ProcessingAmount';
import * as AbortReasons from '../constants/AbortReasons';

import {WITHDRAW_LIMIT, FUNDS} from '../constants/config';

/** 
 * This is the controller that processes the amount
 * Because it's a dummy controller it only waits after a specific timeout
 * It takes the withdraw limit and launchs an abort screen in case it surpasses it
 * Otherwise it checks against the funds and sends a message regarding that
 */
export default class ProcessingAmountController extends React.Component {
	static propTypes = {
		ATMState:React.PropTypes.shape({
			'amount':React.PropTypes.number.isRequired
		}).isRequired,
		actions: React.PropTypes.shape({
			'withdrawSuscesful':React.PropTypes.func.isRequired,
			'performAbort':React.PropTypes.func.isRequired
		}).isRequired
	}

	/**
	 * Waits 2 seconds before performing the action regarding the funds as well as the limit
	 * @return {undefined}
	 */
	componentDidMount(){
		setTimeout(()=>{
			if (this.props.ATMState.amount > WITHDRAW_LIMIT){
				this.props.actions.performAbort(AbortReasons.WITHDRAW_LIMIT_REACHED);
			} else if (this.props.ATMState.amount > FUNDS){
				this.props.actions.performAbort(AbortReasons.NOT_ENOUGH_FUNDS);
			} else {
				this.props.actions.withdrawSuscesful();
			}
		},2000);
	}

	/**
	 * Render function
	 * @return {React.Component}
	 */
	render(){
		return (<ProcessingAmount onAbort={this.props.actions.performAbort} amount={this.props.ATMState.amount}/>);
	}
}
