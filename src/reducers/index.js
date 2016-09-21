/**
 * @file Includes all the reducers that the application needs in order to execute
 * @author Edward Gonzalez
 */

import { combineReducers } from 'redux';
import state from './state';

/**
 * This is the root reducer that will populate the store
 */
const rootReducer = combineReducers({state});

export default rootReducer;
