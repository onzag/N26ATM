/**
 * @file Contains the waiting for pin screen view
 * @author Edward Gonzalez
 */

import React from 'react';
import NavBar from './components/NavBar';
import Button from './components/Button';
import TextField from './components/TextField';

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

	/**
	 * Constructor of the screen, initializes the pin and binds the functions
	 * @param {Object} props the react properties
	 */
	constructor(props){
		super(props);
		this.state = {
			'pin':''
		};
		this.updatePin = this.updatePin.bind(this);
	}

	/**
	 * Updates the pin value in the screen
	 * @param {String} pin the new pin
	 * @return {undefined}
	 */
	updatePin(pin){
		this.setState({pin});
	}

	/**
	 * Render function
	 * @return {React.Component}
	 */
	render(){
		return (<div className="WaitingForPin screen">
			<NavBar canAbort onAbort={this.props.onAbort.bind(null,AbortReasons.USER_CANCELS)}/>

			<div className="text full-width color medium-black light lg centered">Please Insert your pin</div>
			<TextField width={350} type="number" onChange={this.updatePin} value={this.state.pin} validate={(pin)=>{
				if (pin.length > 4){
					return "Pin too long"
				}
			}}/>
			<Button width={350} color="skyblue" className="accept-pin" onClick={this.props.onPinInserted.bind(null,this.state.pin)}
				textType="white md" disabled={this.state.pin.length !== 4}>OK</Button>
		</div>);
	}
}
