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

/** 
 * This is the main application class that controls all the components that render a specific view
 * It uses the state out of the store in order to render the view
 */
class App extends React.Component {
	static propTypes = {
		ATMState: React.PropTypes.shape({
			'state':React.PropTypes.oneOf(Object.keys(States)).isRequired,
			'pin':React.PropTypes.string,
			'pinAttempts':React.PropTypes.number.isRequired,
			'abortReason':React.PropTypes.oneOf(Object.keys(AbortReasons)),
		})
	}
	/**
	 * Render function
	 * @returns {React.Component}
	 */
	render(){
		switch (this.props.ATMState.state){
			case States.WAITING_FOR_CARD:
				return (<controllers.WaitingForCard ATMState={this.props.ATMState} actions={this.props.actions}/>);
			case States.PROCESSING_CARD:
				return (<controllers.ProcessingCard ATMState={this.props.ATMState} actions={this.props.actions}/>);
			case States.WAITING_FOR_PIN:
				return (<controllers.WaitingForPin ATMState={this.props.ATMState} actions={this.props.actions}/>);
			case States.PROCESSING_PIN:
				return (<controllers.ProcessingPin ATMState={this.props.ATMState} actions={this.props.actions}/>);
			case States.ABORTING:
				return (<controllers.Aborting ATMState={this.props.ATMState} actions={this.props.actions}/>);
			case States.WAITING_FOR_AMOUNT:
				return (<controllers.WaitingForAmount ATMState={this.props.ATMState} actions={this.props.actions}/>);
			case States.PROCESSING_AMOUNT:
				return (<controllers.ProcessingAmount ATMState={this.props.ATMState} actions={this.props.actions}/>);
			case States.DELIVERING:
				return (<controllers.Delivering ATMState={this.props.ATMState} actions={this.props.actions}/>);
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
	return {
		actions: bindActionCreators(actions, dispatch)
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
