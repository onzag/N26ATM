/**
 * @file Contains the state reducer for the ATM current state
 * @author Edward Gonzalez
 */

import * as States from '../constants/States';
import * as ActionTypes from '../constants/ActionTypes';

/**
 * This is the main state reducer and represents the main state of the application
 * it represents in which situation the ATM is
 *
 * @param {String} state The current state, as provided by the store
 * @param {Object} action The action that is executed
 */
export default function state(state = States.WAITING_FOR_CARD, action){
	switch (action.type){
		case ActionTypes.CARD_INSERTED:
			return States.PROCESSING_CARD;
		case ActionTypes.CARD_PROCESSED:
			return States.WAITING_FOR_PIN;
		case ActionTypes.PIN_INSERTED:
			return States.PROCESSING_PIN;
		case ActionTypes.PIN_PROCESSED_VALID:
			return States.WAITING_FOR_AMOUNT;
		case ActionTypes.PIN_PROCESSED_INVALID:
			return States.WAITING_FOR_PIN;
		case ActionTypes.WITHDRAW:
			return States.PROCESSING_AMOUNT;
		case ActionTypes.WITHDRAW_SUSCESFUL:
			return States.DELIVERING;
		case ActionTypes.WITHDRAW_FAILED:
			return States.WAITING_FOR_AMOUNT;
		case ActionTypes.MONEY_DELIVERED:
			return States.DELIVERED;
		case ActionTypes.CARD_AND_MONEY_TAKEN:
			return States.DONE;
		case ActionTypes.FINISHED:
			return States.WAITING_FOR_CARD;
		case ActionTypes.PERFORM_ABORT:
			return States.ABORTING;
		case ActionTypes.COMPLETE_ABORT:
			return States.WAITING_FOR_CARD;
		default:
			return States.WAITING_FOR_CARD;
	}
}
