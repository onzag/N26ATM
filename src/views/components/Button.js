/**
 * @file Contains the button component
 * @author Edward Gonzalez
 */

import React from 'react';
import './css/Button.css';

/**
 * The button components represents a reusable component that is designed to be clicked
 */
export default class Button extends React.Component {
	static propTypes = {
		children:React.PropTypes.string,
		inverse:React.PropTypes.bool,
		large: React.PropTypes.bool,
		color:React.PropTypes.string,
		textColor: React.PropTypes.string,
		textType: React.PropTypes.string,
		disabled:React.PropTypes.bool,
		type:React.PropTypes.string,
		full:React.PropTypes.bool,
		className:React.PropTypes.string,
		right: React.PropTypes.bool,
		onClick: React.PropTypes.func,
		width: React.PropTypes.number
	}
	/**
	 * Render function
	 * @return {React.Component}
	 */
	render(){
		let className = "button color";
		if (!this.props.color){
			className += " green";
		} else {
			className += " " + this.props.color;
		}
		if (this.props.inverse){
			className += " text inverse";
		} else {
			className += " background";
		}
		if (this.props.full){
			className += " full";
		}
		if (this.props.disabled){
			className += " disabled";
		}
		if (this.props.large){
			className += " large";
		}
		if (this.props.right){
			className += " right";
		}

		if (this.props.className){
			className += " " + this.props.className;
		}

		let spanClassName = "color text "
		if (this.props.textType){
			spanClassName += " " + this.props.textType;
		} else {
			spanClassName += "black"
		}

		let style = {};
		if (this.props.width){
			style.width = this.props.width;
		}

		return (<button disabled={this.props.disabled} type={this.props.type}
			className={className} onClick={this.props.onClick} style={style}>
				<span className={spanClassName}>{this.props.children}</span>
			</button>);
	}
}
