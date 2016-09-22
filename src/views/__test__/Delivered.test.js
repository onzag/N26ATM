import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import Delivered from '../Delivered';

describe('Delivered tests',()=>{
	it('should call on card and money taken when clicking next', () => {
		const onCardAndMoneyTaken = sinon.spy();
		const scr = shallow(<Delivered onCardAndMoneyTaken={onCardAndMoneyTaken}/>);
		scr.find('.take-card-and-money-button').simulate('click');
		expect(onCardAndMoneyTaken.calledOnce).toBeTruthy();
	});
});
