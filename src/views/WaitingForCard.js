/**
 * @file Contains the waiting for card screen view
 * @author Edward Gonzalez
 */

import React from 'react';
//import NavBar from './components/NavBar';

import './css/WaitingForCard.css';

/** 
 * This is the view that represents the waiting for card screen
 */
export default class WaitingForCard extends React.Component {
	static propTypes = {
		onCardInserted: React.PropTypes.func.isRequired
	}
	/**
	 * Render function
	 * @returns {React.Component}
	 */
	render(){//<Button>Insert Card</Button><NavBar />
		return (<div className="WaitingForCard">
			
			<div className="ion ion-card color dark-gray text full-width centered"/>
			<p className="text full-width centered light lg color dark-gray">Insert your card to begin</p>
			<div className="ion ion-chevron-down color light-gray text full-width centered"/>
		</div>);
	}
}
