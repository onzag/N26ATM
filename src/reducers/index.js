/**
 * @file Includes all the reducers that the application needs in order to execute
 * @author Edward Gonzalez
 */

import { combineReducers } from 'redux';
import state from './state';
import pin from './pin';
import pinAttempts from './pinAttempts';
import abortReason from './abortReason';
import amount from './amount';

/**
 * This is the root reducer that will populate the store
 */
const rootReducer = combineReducers({state,pinAttempts,abortReason,pin,amount});

export default rootReducer;
