import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import * as AbortReasons from '../../constants/AbortReasons';

import Aborting from '../Aborting';

describe('Aborting tests',()=>{
	it('should call on abort completed when clicking next', () => {
		const onAbortCompleted = sinon.spy();
		const scr = shallow(<Aborting reason={AbortReasons.USER_CANCELS} onAbortCompleted={onAbortCompleted}/>);
		scr.find('.retrieve-card-button').simulate('click');
		expect(onAbortCompleted.calledOnce).toBeTruthy();
	});
});
