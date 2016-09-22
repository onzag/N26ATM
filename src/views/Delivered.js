/**
 * @file Contains the delivered screen view that expects the user to take the money and card
 * @author Edward Gonzalez
 */

import React from 'react';
import NavBar from './components/NavBar';
import Button from './components/Button';

import './css/Delivered.css';

/** 
 * This is the view that represents the delivered screen
 * It shows that the money is done
 * Waits for the user on input to keep going and show thanks screen
 */
export default class Delivered extends React.Component {
	static propTypes = {
		onCardAndMoneyTaken: React.PropTypes.func.isRequired
	}
	/**
	 * Render function
	 * @return {React.Component}
	 */
	render(){
		return (<div className="Delivered screen">
			<NavBar canAbort={false}/>
			<div className="ion ion-cash color dark-gray text full-width centered"/>
			<p className="text full-width centered light lg color dark-gray">Your cash is ready</p>
			<div className="ion ion-chevron-down color light-gray text full-width centered"/>
			<Button full large color="blue" className="take-card-and-money-button" textType="light white lg"
				onClick={this.props.onCardAndMoneyTaken}>Take card and money</Button>
		</div>);
	}
}
