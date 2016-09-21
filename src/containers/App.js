/**
 * @file Contains the main app class that controls all the application behaviour
 * @author Edward Gonzalez
 */

import React from 'react';

/** 
 * This is the main application class that controls all the components that render a specific view
 * It uses the state out of the store in order to render the view
 */
export default class App extends React.Component {
	/**
	 * Render function
	 * @returns {React.Component}
	 */
	render(){
		return (<div>
			Application View
		</div>);
	}
}
