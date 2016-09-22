import amount from '../amount';
import * as AbortReasons from '../../constants/AbortReasons';
import * as Actions from '../../actions';

describe('Check amount reducer return value',()=>{
	it('Should return null when null state',()=>{
		expect(amount(null,{'type':'@@Redux/INIT'})).toBeNull();
	});
	it('Should return null when performing abort',()=>{
		expect(amount('STATE',Actions.performAbort(AbortReasons.NOT_ENOUGH_FUNDS))).toBeNull();
	});
	it('Should return null when completing abort',()=>{
		expect(amount('STATE',Actions.completeAbort())).toBeNull();
	});
	it('Should return null when finished',()=>{
		expect(amount('STATE',Actions.finished())).toBeNull();
	});
	it('Should return the payload when withdraw',()=>{
		expect(amount(null,Actions.withdraw(1234))).toBe(1234);
	});
});
