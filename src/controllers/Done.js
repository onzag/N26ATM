/**
 * @file Contains the controller that displays the thanks screen
 * @author Edward Gonzalez
 */

import React from 'react';

import Done from '../views/Done';

/** 
 * This is the controller class that handles such
 * It just shows itself for two seconds before finishing
 */
export default class DoneController extends React.Component {
	static propTypes = {
		actions:  React.PropTypes.shape({
			'finished':React.PropTypes.func.isRequired
		}).isRequired
	}

	/**
	 * Waits 2 seconds before restarting by triggering the finished event
	 * @return {undefined}
	 */
	componentDidMount(){
		setTimeout(()=>{
			this.props.actions.finished();
		},2000);
	}

	/**
	 * Render function
	 * @return {React.Component}
	 */
	render(){
		return (<Done/>);
	}
}
