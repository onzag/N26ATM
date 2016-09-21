/**
 * @file Contains the main app class that controls all the application behaviour
 * @author Edward Gonzalez
 */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';
import * as controllers from '../controllers';
import * as States from '../constants/States';
import * as AbortReasons from '../constants/AbortReasons';
import * as WithdrawFailReasons from '../constants/WithdrawFailReasons';

/** 
 * This is the main application class that controls all the components that render a specific view
 * It uses the state out of the store in order to render the view
 */
class App extends React.Component {
	static propTypes = {
		ATMState: React.PropTypes.shape({
			'state':React.PropTypes.oneOf(Object.keys(States)).isRequired,
			'pinAttempts':React.PropTypes.number.isRequired,
			'withdrawAttempts':React.PropTypes.number.isRequired,
			'abortReason':React.PropTypes.oneOf(Object.keys(AbortReasons)),
			'withdrawFailReason':React.PropTypes.oneOf(Object.keys(WithdrawFailReasons))
		})
	}
	/**
	 * Render function
	 * @returns {React.Component}
	 */
	render(){
		switch (this.props.ATMState.state){
			case States.WAITING_FOR_CARD:
				return (<controllers.WaitingForCard AMTState={this.props.ATMState} actions={this.props.actions}/>);
			default:
				return (<div>NOT IMPLEMENTED</div>);
		}
	}
}

/**
 * @ignore
 */
const mapStateToProps = (state)=>{
	return {
		ATMState: state
	}
};

/**
 * @ignore
 */
const mapDispatchToProps = (dispatch)=>{
	return {actions: bindActionCreators(actions, dispatch)}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
