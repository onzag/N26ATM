/**
 * @file Contains the action types constants
 * @author Edward Gonzalez
 */

/**
 * The card has been inserted by the user
 */
export const CARD_INSERTED = 'CARD_INSERTED';

/**
 * The card has been processed by the ATM
 */
export const CARD_PROCESSED = 'CARD_PROCESSED';

/**
 * The pin has been inserted by the user
 */
export const PIN_INSERTED = 'PIN_INSERTED';

/**
 * The pin is valid
 */
export const PIN_PROCESSED_VALID = 'PIN_PROCESSED_VALID';

/**
 * The pin is invalid
 */
export const PIN_PROCESSED_INVALID = 'PIN_PROCESSED_INVALID';

/**
 * withdraw some money
 */
export const WITHDRAW = 'WITHDRAW';

/**
 * withdraw was suscesful
 */
export const WITHDRAW_SUSCESFUL = 'WITHDRAW_SUSCESFUL';

/**
 * money has been delivered
 */
export const MONEY_DELIVERED = 'MONEY_DELIVERED';

/**
 * The user took his card and money
 */
export const CARD_AND_MONEY_TAKEN = 'CARD_AND_MONEY_TAKEN';

/**
 * Process finished
 */
export const FINISHED = 'FINISHED';

/**
 * Trigger an abort
 */
export const PERFORM_ABORT = 'PERFORM_ABORT';

/**
 * Abort has been completed
 */
export const COMPLETE_ABORT = 'COMPLETE_ABORT';
