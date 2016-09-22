import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import WaitingForPin from '../WaitingForPin';

describe('Waiting for pin tests',()=>{
	it('should call on abort when on abort action', () => {
		const onAbort = sinon.spy();
		const scr = mount(<WaitingForPin onAbort={onAbort} attemptsLeft={3} onPinInserted={()=>{}}/>);
		scr.find('.ion-ios-close-outline').simulate('click');
		expect(onAbort.calledOnce).toBeTruthy();
	});
	it('should call a pin action when it is executed', () => {
		const onPinInserted = sinon.spy();
		const scr = mount(<WaitingForPin onAbort={()=>{}} attemptsLeft={3} onPinInserted={onPinInserted}/>);
		src.find('input').simulate('change', {target: {value: '1234'}});
		src.find('button').simulate('click');
		expect(onPinInserted.calledOnce).toBeTruthy();
		expect(onPinInserted.getCall(0).args[0]).toBe('1234');
	});
	it('should not call a pin action when it is executed with a short pin', () => {
		const onPinInserted = sinon.spy();
		const scr = mount(<WaitingForPin onAbort={()=>{}} attemptsLeft={3} onPinInserted={onPinInserted}/>);
		src.find('input').simulate('change', {target: {value: '12'}});
		src.find('button').simulate('click');
		expect(onPinInserted.calledOnce).not.toBeTruthy();
	});
});
