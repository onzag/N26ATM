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

/** 
 * This is the main application class that controls all the components that render a specific view
 * It uses the state out of the store in order to render the view
 */
class App extends React.Component {
	static propTypes = {
		ATMState: React.PropTypes.shape({
			'state':React.PropTypes.oneOf(Object.keys(States)).isRequired,
			'pinAttempts':React.PropTypes.number.isRequired
		})
	}
	/**
	 * Render function
	 * @returns {React.Component}
	 */
	render(){
		return (<div>
			Application View
		</div>);
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
