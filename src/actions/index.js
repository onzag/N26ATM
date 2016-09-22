/**
 * @file Contains the action generators
 * @author Edward Gonzalez
 */

import * as ActionTypes from '../constants/ActionTypes';
import * as AbortReasons from '../constants/AbortReasons';

/*
 * @ignore
 */
const AbortReasonsList = Object.keys(AbortReasons);

/**
 * Executes when the card has been inserted by the user
 * @return {Object} The generated action
 * @property {String} type The type constant as defined in ActionTypes
 */
export const cardInserted = ()=>{
	return {'type':ActionTypes.CARD_INSERTED}
}

/**
 * Executes when the card has been processed by the ATM
 * @return {Object} The generated action
 * @property {String} type The type constant as defined in ActionTypes
 */
export const cardProcessed = ()=>{
	return {'type':ActionTypes.CARD_PROCESSED}
}

/**
 * Executes when the pin has been inserted by the user
 * @return {Object} The generated action
 * @property {String} type The type constant as defined in ActionTypes
 * @property {String} payload The inserted pin
 */
export const pinInserted = (pin)=>{
	if (!pin || typeof(pin) !== "string"){
		throw new Error('cannot execute action pinInserted without a valid pin',pin);
	}
	return {'type':ActionTypes.PIN_INSERTED,'payload':pin};
}

/**
 * Executes when the pin processed is valid
 * @return {Object} The generated action
 * @property {String} type The type constant as defined in ActionTypes
 */
export const pinProcessedValid = ()=>{
	return {'type':ActionTypes.PIN_PROCESSED_VALID};
}

/**
 * Executes when the pin processed is not valid
 * @return {Object} The generated action
 * @property {String} type The type constant as defined in ActionTypes
 */
export const pinProcessedInvalid = ()=>{
	return {'type':ActionTypes.PIN_PROCESSED_INVALID};
}

/**
 * Executes when the user specifies that he wants to withdraw some money
 * @return {Object} The generated action
 * @property {String} type The type constant as defined in ActionTypes
 */
export const withdraw = (amount)=>{
	if (!amount || typeof(amount) !== "number" || amount < 0){
		throw new Error('cannot execute action withdraw without a valid amount',amount);
	}
	return {'type':ActionTypes.WITHDRAW,'payload':amount};
}

/**
 * Executes when the withdraw was suscesful
 * @return {Object} The generated action
 * @property {String} type The type constant as defined in ActionTypes
 */
export const withdrawSuscesful = ()=>{
	return {'type':ActionTypes.WITHDRAW_SUSCESFUL};
}

/**
 * Executes when the money is delivered
 * @return {Object} The generated action
 * @property {String} type The type constant as defined in ActionTypes
 */
export const moneyDelivered = ()=>{
	return {'type':ActionTypes.MONEY_DELIVERED};
}

/**
 * Executes when the user takes the card and the money
 * @return {Object} The generated action
 * @property {String} type The type constant as defined in ActionTypes
 */
export const cardAndMoneyTaken = ()=>{
	return {'type':ActionTypes.CARD_AND_MONEY_TAKEN};
}

/**
 * Executes when the ATM is done
 * @return {Object} The generated action
 * @property {String} type The type constant as defined in ActionTypes
 */
export const finished = ()=>{
	return {'type':ActionTypes.FINISHED};
}

/**
 * Executes when the ATM aborts for some reason
 * @return {Object} The generated action
 * @property {String} type The type constant as defined in ActionTypes
 * @property {String} payload The reason why it aborts as defined in AbortReasons
 */
export const performAbort = (reason)=>{
	if (AbortReasonsList.indexOf(reason) === -1){
		throw new Error('cannot execute action performAbort without a valid reason',reason,'from',AbortReasonsList);
	}
	return {'type':ActionTypes.PERFORM_ABORT,'payload':reason};
}

/**
 * Executes when the ATM completes the abort process
 * @return {Object} The generated action
 * @property {String} type The type constant as defined in ActionTypes
 */
export const completeAbort = ()=>{
	return {'type':ActionTypes.COMPLETE_ABORT};
}
