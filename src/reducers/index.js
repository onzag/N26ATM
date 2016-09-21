/**
 * @file Includes all the reducers that the application needs in order to execute
 * @author Edward Gonzalez
 */

import { combineReducers } from 'redux';
import state from './state';
import pin from './pin';
import pinAttempts from './pinAttempts';
import withdrawAttempts from './withdrawAttempts';
import abortReason from './abortReason';
import withdrawFailReason from './withdrawFailReason';
import amount from './amount';

/**
 * This is the root reducer that will populate the store
 */
const rootReducer = combineReducers({state,pinAttempts,withdrawAttempts,abortReason,withdrawFailReason,pin,amount});

export default rootReducer;
