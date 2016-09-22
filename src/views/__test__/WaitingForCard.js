import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import WaitingForCard from '../WaitingForCard';

describe('Waiting for card tests',()=>{
	it('should wait for the card inserted event', () => {
		const onCardInserted = sinon.spy();
		const scr = shallow(<WaitingForCard onCardInserted={onCardInserted}/>);
		scr.find('.insert-card-button').simulate('click');
		expect(onCardInserted.calledOnce).toBeTruthy();
	});
});
