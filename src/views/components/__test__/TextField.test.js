import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import TextField from '../TextField';

describe('TextField tests',()=>{
	it('should invoke callback when triggered input', () => {
		const onChange = sinon.spy();
		const field = shallow(<TextField value={"test"} onChange={onChange}/>);
		field.find('input').simulate('change', {target: {value: 'Test'}});
		expect(onChange.calledOnce).toBeTruthy();
		expect(onChange.getCall(0).args[0]).toBe('Test');
	});
	it('should have an euro symbol when set as currency', () => {
		const field = shallow(<TextField value={"test"} onChange={()=>{}} currency/>);
		expect(field.find('.symbol').length).toBe(1);
	});
	it('should not have an euro symbol when not set as currency', () => {
		const field = shallow(<TextField value={"test"} onChange={()=>{}}/>);
		expect(field.find('.symbol').length).toBe(0);
	});
	it('trigger set an error message on invalid change', () => {
		const field = shallow(<TextField value={"test"} onChange={()=>{}} validate={(v)=>{
			return 'Error';
		}}/>);
		field.find('input').simulate('change', {target: {value: 'Test'}});
		expect(field.find('.error').text()).toBe('Error');
	});
});
