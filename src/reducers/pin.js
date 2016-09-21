/**
 * @file Contains information about the current pin to use for processing
 * @author Edward Gonzalez
 */

import * as ActionTypes from '../constants/ActionTypes';

/**
 * This is the state reducer that represents the current pin that was
 * set into the ATM and it holded only for a brief time until is valid or invalid
 *
 * @param {String} state The current state, as provided by the store
 * @param {Object} action The action that is executed
 */
export default function pin(state = null, action){
	switch (action.type){
		case ActionTypes.PIN_INSERTED:
			return action.payload;
		case ActionTypes.PIN_PROCESSED_VALID:
		case ActionTypes.PIN_PROCESSED_INVALID:
		case ActionTypes.COMPLETE_ABORT:
		case ActionTypes.PERFORM_ABORT:
			return null;
		default:
			return state;
	}
}
