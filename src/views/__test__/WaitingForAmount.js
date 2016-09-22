import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import WaitingForAmount from '../WaitingForAmount';

describe('Waiting for amount tests',()=>{
	it('should call on abort when on abort action', () => {
		const onAbort = sinon.spy();
		const scr = mount(<WaitingForPin onAbort={onAbort} onWithdraw={()=>{}}/>);
		scr.find('.ion-ios-close-outline').simulate('click');
		expect(onAbort.calledOnce).toBeTruthy();
	});
	it('should call a withdraw action when withdrawn (from button)', () => {
		const onWithdraw = sinon.spy();
		const scr = mount(<WaitingForPin onAbort={()=>{}} onWithdraw={onWithdraw}/>);
		src.find('.options button').simulate('click');
		expect(onWithdraw.calledOnce).toBeTruthy();
	});
	it('should call a withdraw action when withdrawn (from input)', () => {
		const onWithdraw = sinon.spy();
		const scr = mount(<WaitingForPin onAbort={()=>{}} onWithdraw={onWithdraw}/>);
		src.find('input').simulate('change', {target: {value: '1200'}});
		src.find('.accept-value').simulate('click');
		expect(onWithdraw.calledOnce).toBeTruthy();
		expect(onWithdraw.getCall(0).args[0]).toBe('1200');
	});
	it('should not call a withdraw action when withdrawn (from input) with invalid value', () => {
		const onWithdraw = sinon.spy();
		const scr = mount(<WaitingForPin onAbort={()=>{}} onWithdraw={onWithdraw}/>);
		src.find('input').simulate('change', {target: {value: 'AAAA'}});
		src.find('.accept-value').simulate('click');
		expect(onWithdraw.calledOnce).not.toBeTruthy();
	});
});
