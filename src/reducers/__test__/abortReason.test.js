import abortReason from '../abortReason';
import * as AbortReasons from '../../constants/AbortReasons';
import * as Actions from '../../actions';

describe('Check amount reducer return value',()=>{
	it('Should return null when null state',()=>{
		expect(abortReason(null,{'type':'@@Redux/INIT'})).toBeNull();
	});
	it('Should return the payload when feed with perform abort action',()=>{
		expect(abortReason(null,Actions.performAbort(AbortReasons.NOT_ENOUGH_FUNDS))).toBe(AbortReasons.NOT_ENOUGH_FUNDS);
	});
	it('Should return null when the action is complete abort regardless the state',()=>{
		expect(abortReason('STATE',Actions.completeAbort())).toBeNull();
	});
});
