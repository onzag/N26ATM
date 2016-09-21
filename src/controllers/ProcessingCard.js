/**
 * @file Contains the processing card controller
 * @author Edward Gonzalez
 */

import React from 'react';

import ProcessingCard from '../views/ProcessingCard';

/** 
 * This is the controller that processes the card operation
 * Because it's a dummy controller it only waits after a specific timeout
 */
export default class ProcessingCardController extends React.Component {
	static propTypes = {
		actions: React.PropTypes.shape({
			'cardProcessed':React.PropTypes.func.isRequired
		}).isRequired
	}

	/**
	 * Waits 2 seconds before setting into card processed state
	 * @return {undefined}
	 */
	componentDidMount(){
		setTimeout(()=>{
			this.props.actions.cardProcessed();
		},2000);
	}

	/**
	 * Render function
	 * @return {React.Component}
	 */
	render(){
		return (<ProcessingCard/>);
	}
}
