/**
 * @file Contains the aborting screen view
 * @author Edward Gonzalez
 */

import React from 'react';
import NavBar from './components/NavBar';
import Button from './components/Button';

import * as AbortReasons from '../constants/AbortReasons';

import './css/Aborting.css';

/** 
 * This is the view that represents the aborting screen
 */
export default class Aborting extends React.Component {
	static propTypes = {
		reason: React.PropTypes.oneOf(Object.keys(AbortReasons)).isRequired,
		onAbortCompleted:React.PropTypes.func.isRequired
	}
	constructor(props){
		super(props);
		this.state = {
			'pin':''
		}
	}
	/**
	 * Render function
	 * @return {React.Component}
	 */
	render(){
		let reason;
		switch (this.props.reason){
			case AbortReasons.TOO_MANY_FAILED_PIN_ATTEMPTS:
				reason = 'Too many failed pin attempts';
				break;
			case AbortReasons.TOO_MANY_FAILED_WITHDRAW_ATTEMPTS:
				reason = 'Too many failed withdraw attempts';
				break;
			case AbortReasons.NOT_ENOUGH_FUNDS:
				reason = 'You do not have enough funds';
				break;
			case AbortReasons.USER_CANCELS:
				reason = 'You cancelled the operation';
				break;
			default:
				reason = 'Unknown aborting process';
				break;
		}
		return (<div className="Aborting screen">
			<NavBar canAbort={false}/>
			<div className="full-width text lg color medium-black centered light">{reason}</div>
			<div className="ion ion-close-round color red text full-width centered"/>
			<div className="full-width text lg color medium-black centered light">Please retrieve your card</div>
			<div className="ion ion-chevron-down color light-gray text full-width centered"/>
			<Button full large color="blue" className="retrieve-card-button" textType="light white lg" onClick={this.props.onAbortCompleted}>Retrieve Card</Button>
		</div>);
	}
}
