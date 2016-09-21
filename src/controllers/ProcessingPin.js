/**
 * @file Contains the processing card controller
 * @author Edward Gonzalez
 */

import React from 'react';

import ProcessingCard from '../views/ProcessingPin';

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
			'pinProcessedInvalid':React.PropTypes.func.isRequired
		}).isRequired
	}

	/**
	 * Waits 2 seconds before setting into valid or invalid state
	 * @return {undefined}
	 */
	componentDidMount(){
		setTimeout(()=>{
			if (this.props.ATMState.pin !== "1234"){
				this.props.actions.pinProcessedInvalid();
			} else {
				this.props.actions.pinProcessedValid();
			}
		},2000);
	}

	/**
	 * Render function
	 * @return {React.Component}
	 */
	render(){
		return (<ProcessingPin/>);
	}
}
