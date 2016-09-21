/**
 * @file Contains the processing card screen
 * @author Edward Gonzalez
 */

import React from 'react';
import NavBar from './components/NavBar';

import './css/ProcessingCard.css';

/** 
 * This is the view that represents the processing card screen
 */
export default class ProcessingCard extends React.Component {
	static propTypes = {
	}
	/**
	 * Render function
	 * @return {React.Component}
	 */
	render(){
		return (<div className="ProcessingCard">
			<NavBar canAbort={false}/>
			<div className="ion ion-card color dark-gray text full-width centered"/>
			<p className="text full-width centered light lg color dark-gray">Please wait while your card is being processed</p>
			<div className="ion ion-load-c color light-gray text full-width centered"/>
		</div>);
	}
}
