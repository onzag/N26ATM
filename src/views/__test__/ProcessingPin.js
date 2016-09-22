import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import ProcessingPin from '../ProcessingPin';

describe('Processing pin tests',()=>{
	it('should call on abort when on abort action', () => {
		const onAbort = sinon.spy();
		const scr = mount(<ProcessingPin onAbort={onAbort}/>);
		scr.find('.ion-ios-close-outline').simulate('click');
		expect(onAbort.calledOnce).toBeTruthy();
	});
});
