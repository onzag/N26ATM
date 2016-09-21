/**
 * @file Contains the action generators
 * @author Edward Gonzalez
 */

/**
 * When the user tried too much on an invalid pin
 */
export const TOO_MANY_FAILED_PIN_ATTEMPTS = 'TOO_MANY_FAILED_PIN_ATTEMPTS';

/**
 * When the user tried too much to withdraw on the excessive amount
 */
export const TOO_MANY_FAILED_WITHDRAW_ATTEMPTS = 'TOO_MANY_FAILED_WITHDRAW_ATTEMPTS';

/**
 * When the user asked more than it had
 */
export const NOT_ENOUGH_FUNDS = 'NOT_ENOUGH_FUNDS';

/**
 * When the user cancels on its own
 */
export const USER_CANCELS = 'USER_CANCELS';
