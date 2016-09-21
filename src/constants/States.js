/**
 * @file Contains the ATM states
 * @author Edward Gonzalez
 */

/**
 * The ATM is waiting for the card
 */
export const WAITING_FOR_CARD = 'WAITING_FOR_CARD';

/**
 * The ATM is processing the card
 */
export const PROCESSING_CARD = 'PROCESSING_CARD';

/**
 * The ATM is waiting for the pin to be inserted
 */
export const WAITING_FOR_PIN = 'WAITING_FOR_PIN';

/**
 * The ATM is processing the pin
 */
export const PROCESSING_PIN = 'PROCESSING_PIN';

/**
 * The ATM is waiting for the amount to be set
 */
export const WAITING_FOR_AMOUNT = 'WAITING_FOR_AMOUNT';

/**
 * The ATM is processing the amount
 */
export const PROCESSING_AMOUNT = 'PROCESSING_AMOUNT';

/**
 * The ATM is delivering the money
 */
export const DELIVERING = 'DELIVERING';

/**
 * The ATM has delivered the money
 */
export const DELIVERED = 'DELIVERED';

/**
 * The ATM is done with the process and will restart
 */
export const DONE = 'DONE';

/**
 * The ATM is aborting
 */
export const ABORTING = 'ABORTING';
