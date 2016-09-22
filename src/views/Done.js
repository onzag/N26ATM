/**
 * @file Contains the done screen view
 * @author Edward Gonzalez
 */

import React from 'react';
import NavBar from './components/NavBar';

import './css/Done.css';

/** 
 * This is the view that represents the done screen
 * It only shows thanks you for a while before rest
 */
export default class Done extends React.Component {
	/**
	 * Render function
	 * @return {React.Component}
	 */
	render(){
		return (<div className="Done screen">
			<NavBar canAbort={false}/>
			<div className="logo text centered">
				<span className="color skyblue text bold">k</span>
				<span className="color medium-black text bold">ATM</span>
			</div>
			<p className="text full-width centered light lg color dark-gray">Thanks for usng our services</p>
		</div>);
	}
}
