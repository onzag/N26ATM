/**
 * @file Contains the waiting for pin screen view
 * @author Edward Gonzalez
 */

import React from 'react';
import NavBar from './components/NavBar';
import Button from './components/Button';

import * as AbortReasons from '../constants/AbortReasons';

import './css/WaitingForPin.css';

/** 
 * This is the view that represents the waiting for pin screen
 */
export default class WaitingForPin extends React.Component {
	static propTypes = {
		onPinInserted: React.PropTypes.func.isRequired,
		onAbort:React.PropTypes.func.isRequired
	}
	constructor(props){
		super(props);
		this.state = {
			'pin':''
		}
	}
	/**
	 * Render function
	 * @return {React.Component}
	 */
	render(){
		return (<div className="WaitingForPin screen">
			<NavBar canAbort onAbort={this.props.onAbort.bind(null,AbortReasons.USER_CANCELS)}/>
			
			<Button full large color="skyblue" className="accept-pin" textType="white md" disabled={this.state.pin.length !== 4}>OK</Button>
		</div>);
	}
}
