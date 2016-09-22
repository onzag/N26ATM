import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import ProcessingAmount from '../ProcessingAmount';

describe('Processing amount tests',()=>{
	it('should call on abort when on abort action', () => {
		const onAbort = sinon.spy();
		const scr = mount(<ProcessingAmount onAbort={onAbort} amount={1234}/>);
		scr.find('.ion-ios-close-outline').simulate('click');
		expect(onAbort.calledOnce).toBeTruthy();
	});
});
