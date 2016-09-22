import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import Button from '../Button';

describe('Button tests',()=>{
	it('should invoke onClick callback when click to "Button"', () => {
		const onButtonClick = sinon.spy();
		const Btn = shallow(<Button onClick={onButtonClick}>Test</Button>);
		Btn.find('button').simulate('click');
		expect(onButtonClick.calledOnce).toBeTruthy();
	});
	it('should show the given text as children', () => {
		const Btn = shallow(<Button>Test</Button>);
		expect(Btn.find('button').text()).toBe("Test");
	});
});
