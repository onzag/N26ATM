/**
 * @file Contains the state reducer for the ATM withdraw attempts
 * @author Edward Gonzalez
 */

import * as ActionTypes from '../constants/ActionTypes';

/**
 * This is the reducer represents the amount of times the user
 * has attempted to withdraw some money
 * The number will reset once the ATM finishes or aborts
 *
 * @param {String} state The current state, as provided by the store
 * @param {Object} action The action that is executed
 */
export default function withdrawAttempts(state = 0, action){
	switch (action.type){
		case ActionTypes.WITHDRAW_SUSCESFUL:
		case ActionTypes.WITHDRAW_FAILED:
			return state + 1;
		case ActionTypes.FINISHED:
		case ActionTypes.COMPLETE_ABORT:
			return 0;
		default:
			return state;
	}
}
