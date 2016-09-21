/**
 * @file Contains the waiting for pin screen view
 * @author Edward Gonzalez
 */

import React from 'react';
import NavBar from './components/NavBar';
import Button from './components/Button';
import TextField from './components/TextField';

import * as AbortReasons from '../constants/AbortReasons';

import './css/WaitingForAmount.css';

/** 
 * This is the view that represents the waiting for pin screen
 */
export default class WaitingForAmount extends React.Component {
	static propTypes = {
		onWithdraw: React.PropTypes.func.isRequired,
		onAbort:React.PropTypes.func.isRequired,
	}

	/**
	 * Constructor of the screen, initializes the custom value and binds the functions
	 * @param {Object} props the react properties
	 */
	constructor(props){
		super(props);
		this.state = {
			'customValue':''
		};
		this.updateCustomValue = this.updateCustomValue.bind(this);
	}

	/**
	 * Updates the custom value in the screen
	 * @param {String} pin the new pin
	 * @return {undefined}
	 */
	updateCustomValue(customValue){
		this.setState({customValue});
	}

	/**
	 * Render function
	 * @return {React.Component}
	 */
	render(){
		return (<div className="WaitingForAmount screen">
			<NavBar canAbort onAbort={this.props.onAbort.bind(null,AbortReasons.USER_CANCELS)}/>

			<div className="main-option text lg medium-black color light">Please select an amount</div>
			<div className="options">
				<div className="column">
					<Button inverse full onClick={this.props.onWithdraw.bind(null,20)}
						textType="dark-gray md light">20 &euro;</Button>
					<Button inverse full onClick={this.props.onWithdraw.bind(null,50)}
						textType="dark-gray md light">50 &euro;</Button>
					<Button inverse full onClick={this.props.onWithdraw.bind(null,100)}
						textType="dark-gray md light">100 &euro;</Button>
				</div>
				<div className="column">
					<Button inverse full onClick={this.props.onWithdraw.bind(null,500)}
						textType="dark-gray md light">500 &euro;</Button>
					<Button inverse full onClick={this.props.onWithdraw.bind(null,1000)}
						textType="dark-gray md light">1000 &euro;</Button>
					<Button inverse full onClick={this.props.onWithdraw.bind(null,2000)}
						textType="dark-gray md light">2000 &euro;</Button>
				</div>
			</div>

			<div className="or-option text lg medium-black color light">Or type a custom one</div>
			<TextField width={350} type="number" onChange={this.updateCustomValue} currency
				value={this.state.customValue} validate={(value)=>{
				if (isNaN(parseInt(value)) && value !== ''){
					return "Invalid numeric value"
				}
			}}/>
			<Button width={350} color="skyblue" className="accept-value" onClick={this.props.onWithdraw.bind(null,parseInt(this.state.customValue))}
				textType="white md" disabled={isNaN(parseInt(this.state.customValue))}>OK</Button>
		</div>);
	}
}
