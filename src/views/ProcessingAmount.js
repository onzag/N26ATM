/**
 * @file Contains the processing amount screen
 * @author Edward Gonzalez
 */

import React from 'react';
import NavBar from './components/NavBar';

import * as AbortReasons from '../constants/AbortReasons';

import './css/ProcessingAmount.css';

/** 
 * This is the view that represents the processing amount screen
 * it shows a message with the specific amount
 */
export default class ProcessingAmount extends React.Component {
	static propTypes = {
		onAbort:React.PropTypes.func.isRequired,
		amount: React.PropTypes.number.isRequired
	}
	/**
	 * Render function
	 * @return {React.Component}
	 */
	render(){
		return (<div className="ProcessingAmount screen">
			<NavBar canAbort onAbort={this.props.onAbort.bind(null,AbortReasons.USER_CANCELS)}/>
			<p className="text full-width centered light lg color dark-gray">Attempting to withdraw <span>{this.props.amount}</span> &euro;</p>
			<div className="ion ion-load-c color light-gray text full-width centered"/>
		</div>);
	}
}
