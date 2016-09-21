/**
 * @file Contains the NavBar that is used across the ATM screens
 * @author Edward Gonzalez
 */

import React from 'react';
import './css/NavBar.css';

/** 
 * This is the component that represents the navbar element
 */
export default class NavBar extends React.Component {
	static propTypes = {
		onAbort: React.PropTypes.func,
		canAbort: React.PropTypes.bool.isRequired
	}
	/**
	 * Render function
	 * @returns {React.Component}
	 */
	render(){

		let abortButton = null;
		if (this.props.canAbort){
			abortButton = (<div className="ion ion-ios-close-outline" onClick={this.props.onAbort}></div>);
		}

		return (<div className="navBar">
			<div className="ion ion-social-euro color dark-gray text"/>
			<div className="text color medium-black md brand"><span className="text bold">k</span><span className="text color skyblue bold">ATM</span></div>
			{abortButton}
		</div>);
	}
}
