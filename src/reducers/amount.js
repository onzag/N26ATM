/**
 * @file Contains information about the current amount to use in the transaction
 * @author Edward Gonzalez
 */

import * as ActionTypes from '../constants/ActionTypes';

/**
 * This is the state reducer that represents the current amount that was used in the ATM
 * the value is held until the operation is over or rolled back
 *
 * @param {String} state The current state, as provided by the store
 * @param {Object} action The action that is executed
 */
export default function amount(state = null, action){
	switch (action.type){
		case ActionTypes.WITHDRAW:
			return action.payload;
		case ActionTypes.COMPLETE_ABORT:
		case ActionTypes.PERFORM_ABORT:
		case ActionTypes.FINISHED:
			return null;
		default:
			return state;
	}
}
