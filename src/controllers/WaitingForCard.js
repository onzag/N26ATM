/**
 * @file Contains the waiting for card controller that tells what to do when it's waiting for a card
 * @author Edward Gonzalez
 */

import React from 'react';

import WaitingForCard from '../views/WaitingForCard';

/** 
 * This is the controller class that handles such
 */
export default class WaitingForCardController extends React.Component {
	static propTypes = {
		actions:  React.PropTypes.shape({
			'cardInserted':React.PropTypes.func.isRequired
		}).isRequired
	}
	/**
	 * Render function
	 * @return {React.Component}
	 */
	render(){
		return (<WaitingForCard onCardInserted={this.props.actions.cardInserted}/>);
	}
}
