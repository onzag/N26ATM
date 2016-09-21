/**
 * @file Contains the state reducer for the ATM withdraw failed reason
 * @author Edward Gonzalez
 */

import * as ActionTypes from '../constants/ActionTypes';

/**
 * This reducer represents the reason why the ATM failed to withdraw some money
 *
 * @param {String} state The current state, as provided by the store
 * @param {Object} action The action that is executed
 */
export default function withdrawFailReason(state = null, action){
	switch (action.type){
		case ActionTypes.WITHDRAW_FAILED:
			return action.payload;
		case ActionTypes.WITHDRAW:
		case ActionTypes.FINISHED:
		case ActionTypes.COMPLETE_ABORT:
			return null;
		default:
			return state;
	}
}
