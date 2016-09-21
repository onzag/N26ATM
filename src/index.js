/**
 * @file The entry point for the application, where middlewares are applied and the store is created
 * @author Edward Gonzalez
 */

import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import reducer from './reducers';

let store;
if (process.env.NODE_ENV === 'production'){
	store = createStore(reducer);
} else {
	let createLogger = require('redux-logger');
	const logger = createLogger();
	store = createStore(
		reducer,
		applyMiddleware(logger)
	);
}

import './css/index.css';
import './css/colors.css';
import './css/text.css';
import './css/screen.css';

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('container')
);
