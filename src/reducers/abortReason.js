/**
 * @file Contains the abortion reason from the ATM
 * @author Edward Gonzalez
 */

import * as ActionTypes from '../constants/ActionTypes';

/**
 * This is the reducer for the abortion reason of the application
 *
 * @param {String} state The current state, as provided by the store
 * @param {Object} action The action that is executed
 */
export default function abortReason(state = null, action){
	switch (action.type){
		case ActionTypes.PERFORM_ABORT:
			return action.payload;
		case ActionTypes.COMPLETE_ABORT:
			return null;
		default:
			return state;
	}
}
