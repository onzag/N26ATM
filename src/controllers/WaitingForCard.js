import React from 'react';

import * as States from '../constants/States';
import * as AbortReasons from '../constants/AbortReasons';
import * as WithdrawFailReasons from '../constants/WithdrawFailReasons';

export default class WaitingForCard extends React.Component {
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
		return (<div>Waiting for card</div>);
	}
}
