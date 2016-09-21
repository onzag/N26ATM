/**
 * @file Contains the processing card screen
 * @author Edward Gonzalez
 */

import React from 'react';
import NavBar from './components/NavBar';

import * as AbortReasons from '../constants/AbortReasons';

import './css/ProcessingPin.css';

/** 
 * This is the view that represents the processing card screen
 */
export default class ProcessingPin extends React.Component {
	static propTypes = {
		onAbort:React.PropTypes.func.isRequired
	}
	/**
	 * Render function
	 * @return {React.Component}
	 */
	render(){
		return (<div className="ProcessingPin screen">
			<NavBar canAbort onAbort={this.props.onAbort.bind(null,AbortReasons.USER_CANCELS)}/>
			<p className="text full-width centered light lg color dark-gray">Please wait while we get the required information</p>
			<div className="ion ion-load-c color light-gray text full-width centered"/>
		</div>);
	}
}
