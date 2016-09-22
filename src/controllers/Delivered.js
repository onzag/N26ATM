/**
 * @file Contains the controller that displays the screen that the money was delivered
 * @author Edward Gonzalez
 */

import React from 'react';

import Delivered from '../views/Delivered';

/** 
 * This is the controller class that handles such
 * Once the user gives the input it will trigger the card and money taken action
 */
export default class DeliveredController extends React.Component {
	static propTypes = {
		actions:  React.PropTypes.shape({
			'cardAndMoneyTaken':React.PropTypes.func.isRequired
		}).isRequired
	}

	/**
	 * Render function
	 * @return {React.Component}
	 */
	render(){
		return (<Delivered onCardAndMoneyTaken={this.props.actions.cardAndMoneyTaken}/>);
	}
}
