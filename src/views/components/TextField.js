/**
 * @file Contains the TextField that is used across the ATM screens
 * @author Edward Gonzalez
 */

import React from 'react';
import './css/TextField.css';

/** 
 * This is the component that represents the textfield element
 */
export default class TextField extends React.Component {
	static propTypes = {
		value: React.PropTypes.string.isRequired,
		validate: React.PropTypes.func,
		onChange: React.PropTypes.func.isRequired,
		width: React.PropTypes.number
	}

	/**
	 * Constructor of the screen, initializes the pin and binds the functions
	 * @param {Object} props the react properties
	 */
	constructor(props){
		super(props);
		this.state = {
			'error':''
		};
		this.onInputChanged = this.onInputChanged.bind(this);
	}

	/**
	 * Triggers when the input has changed
	 * @param {Event} e The triggering event
	 */
	onInputChanged(e){
		if (this.props.validate){
			this.setState({'error':(this.props.validate(e.target.value) || '')});
		}
		this.props.onChange(e.target.value);
	}

	/**
	 * Render function
	 * @returns {React.Component}
	 */
	render(){
		let width = "100%";
		if (this.props.width){
			width = this.props.width;
		}

		let className = "textField";
		if (this.state.error){
			className += " errored";
		}

		return (<div className={className} style={{width}}>
			<input type={this.props.type || "text"} onChange={this.onInputChanged} value={this.props.value}/>
			<span className="error text light sm color red">{this.state.error}</span>
		</div>);
	}
}
