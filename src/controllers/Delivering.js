/**
 * @file Contains the controller that displays the view for the delivering screen
 * @author Edward Gonzalez
 */

import React from 'react';

import Delivering from '../views/Delivering';

/** 
 * This is the controller class that handles such
 * It's a dummy controller and just waits two second to consider it delivered
 */
export default class DeliveringController extends React.Component {
	static propTypes = {
		actions:  React.PropTypes.shape({
			'moneyDelivered':React.PropTypes.func.isRequired
		}).isRequired
	}

	/**
	 * Waits 2 seconds before setting the state to devivered
	 * @return {undefined}
	 */
	componentDidMount(){
		setTimeout(()=>{
			this.props.actions.moneyDelivered();
		},2000);
	}

	/**
	 * Render function
	 * @return {React.Component}
	 */
	render(){
		return (<Delivering/>);
	}
}
