/**
 * @file Contains the processing card controller
 * @author Edward Gonzalez
 */

import React from 'react';

import ProcessingPin from '../views/ProcessingPin';
import * as AbortReasons from '../constants/AbortReasons';

import {MAX_PIN_TRIES, RIGHT_PIN} from '../constants/config';

/** 
 * This is the controller that processes the pin operation
 * Because it's a dummy controller it only waits after a specific timeout
 * The only valid pin is 1234
 */
export default class ProcessingPinController extends React.Component {
	static propTypes = {
		ATMState:React.PropTypes.shape({
			'pin':React.PropTypes.string.isRequired
		}).isRequired,
		actions: React.PropTypes.shape({
			'pinProcessedValid':React.PropTypes.func.isRequired,
			'pinProcessedInvalid':React.PropTypes.func.isRequired,
			'performAbort':React.PropTypes.func.isRequired
		}).isRequired
	}

	/**
	 * React constructor
	 * @param {Object} props the react properties
	 */
	constructor(props){
		super(props);

		/**
		 * Contains the timeout variable
		 * @type {?Number}
		 */
		this.timeout = null;

		this.abort = this.abort.bind(this);
	}

	/**
	 * Waits 2 seconds before setting into valid or invalid state
	 * It can also abort if done too many times
	 * @return {undefined}
	 */
	componentDidMount(){
		this.timeout = setTimeout(()=>{
			if (this.props.ATMState.pin === RIGHT_PIN){
				this.props.actions.pinProcessedValid();
			} else if (this.props.ATMState.pinAttempts >= (MAX_PIN_TRIES - 1)){
				this.props.actions.performAbort(AbortReasons.TOO_MANY_FAILED_PIN_ATTEMPTS);
			} else {
				this.props.actions.pinProcessedInvalid();
			}
		},2000);
	}

	/**
	 * Performs the abort and cancels the waiting operation
	 * @return {undefined}
	 */
	abort(){
		clearTimeout(this.timeout);
		this.props.actions.performAbort();
	}

	/**
	 * Render function
	 * @return {React.Component}
	 */
	render(){
		return (<ProcessingPin onAbort={this.abort}/>);
	}
}
