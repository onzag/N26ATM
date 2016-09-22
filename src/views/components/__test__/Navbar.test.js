import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import NavBar from '../NavBar';

describe('Navbar tests',()=>{
	it('should tigger an event on the abort click', () => {
		const onButtonClick = sinon.spy();
		const nav = shallow(<NavBar onAbort={onButtonClick} canAbort />);
		nav.find('.ion-ios-close-outline').simulate('click');
		expect(onButtonClick.calledOnce).toBeTruthy();
	});
	it('should not have an abort button', () => {
		const nav = shallow(<NavBar canAbort={false}/>);
		expect(nav.find('.ion-ios-close-outline').length).toBe(0);
	});
});
