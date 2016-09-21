/**
 * @file Contains the waiting for pin screen view
 * @author Edward Gonzalez
 */

import React from 'react';
import NavBar from './components/NavBar';
import Button from './components/Button';
import TextField from './components/TextField';

import {MAX_PIN_TRIES} from '../constants/config';

import * as AbortReasons from '../constants/AbortReasons';

import './css/WaitingForPin.css';

/** 
 * This is the view that represents the waiting for pin screen
 */
export default class WaitingForPin extends React.Component {
	static propTypes = {
		onPinInserted: React.PropTypes.func.isRequired,
		onAbort:React.PropTypes.func.isRequired,
		attemptsLeft: React.PropTypes.number.isRequired
	}

	/**
	 * Constructor of the screen, initializes the pin and binds the functions
	 * @param {Object} props the react properties
	 */
	constructor(props){
		super(props);

		/**
		 * The main state of the component
		 * @type {Object}
		 * @property {String} pin the current pin
		 */
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
		let label = <div className="text full-width color medium-black light lg centered please-insert">Please Insert your pin</div>;
		if (this.props.attemptsLeft < MAX_PIN_TRIES){
			label = <div className="text full-width color red light lg centered invalid please-insert">Invalid pin please try again</div>
		}
		return (<div className="WaitingForPin screen">
			<NavBar canAbort onAbort={this.props.onAbort.bind(null,AbortReasons.USER_CANCELS)}/>

			{label}
			<TextField width={350} type="number" onChange={this.updatePin} value={this.state.pin} validate={(pin)=>{
				if (pin.length > 4){
					return "Pin too long"
				}
			}}/>
			<Button width={350} color="skyblue" className="accept-pin" onClick={this.props.onPinInserted.bind(null,this.state.pin)}
				textType="white md" disabled={this.state.pin.length !== 4}>OK</Button>

			<div className="text full-width color medium-gray md centered attempts-left">You have <span>{this.props.attemptsLeft}</span> attempts left</div>
		</div>);
	}
}
