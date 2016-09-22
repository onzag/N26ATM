/**
 * @file Contains the delivering screen view
 * @author Edward Gonzalez
 */

import React from 'react';
import NavBar from './components/NavBar';

import './css/Delivering.css';

/** 
 * This is the view that represents the delivering screen
 * It shows that the money is being processed
 */
export default class Delivering extends React.Component {
	/**
	 * Render function
	 * @return {React.Component}
	 */
	render(){
		return (<div className="Delivering screen">
			<NavBar canAbort={false}/>
			<div className="ion ion-cash color dark-gray text full-width centered"/>
			<p className="text full-width centered light lg color dark-gray">Please wait...</p>
			<div className="ion ion-load-c color light-gray text full-width centered"/>
		</div>);
	}
}
