/**
 * @file Includes all the reducers that the application needs in order to execute
 * @author Edward Gonzalez
 */

import { combineReducers } from 'redux';
import state from './state';
import pinAttempts from './pinAttempts';
import withdrawAttempts from './withdrawAttempts';
import abortReason from './abortReason';

/**
 * This is the root reducer that will populate the store
 */
const rootReducer = combineReducers({state,pinAttempts,abortReason});

export default rootReducer;
