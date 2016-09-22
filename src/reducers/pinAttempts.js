/**
 * @file Contains the state reducer for the ATM pin attempts
 * @author Edward Gonzalez
 */

import * as ActionTypes from '../constants/ActionTypes';

/**
 * This is the main state reducer and represents the amount of times the user
 * has attempted to put a pin in the ATM
 * The number will reset once the ATM finishes or aborts
 *
 * @param {Number} state The current state, as provided by the store
 * @param {Object} action The action that is executed
 */
export default function pinAttempts(state = 0, action){
	switch (action.type){
		case ActionTypes.PIN_PROCESSED_VALID:
		case ActionTypes.PIN_PROCESSED_INVALID:
			return state + 1;
		case ActionTypes.FINISHED:
		case ActionTypes.PERFORM_ABORT:
		case ActionTypes.COMPLETE_ABORT:
			return 0;
		default:
			return state;
	}
}
