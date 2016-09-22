import pinAttempts from '../pinAttempts';
import * as AbortReasons from '../../constants/AbortReasons';
import * as Actions from '../../actions';

describe('Check pin attempts reducer return value',()=>{
	it('Should return the same when no state',()=>{
		expect(pinAttempts(1,{'type':'@@Redux/INIT'})).toBe(1);
	});
	it('Should return one plus when pin valid',()=>{
		expect(pinAttempts(5,Actions.pinProcessedValid())).toBe(6);
	});
	it('Should return one plus when pin invalid',()=>{
		expect(pinAttempts(10,Actions.pinProcessedInvalid())).toBe(11);
	});
	it('Should return 0 when performing abort',()=>{
		expect(pinAttempts(20,Actions.performAbort(AbortReasons.NOT_ENOUGH_FUNDS))).toBe(0);
	});
	it('Should return 0 when completing abort',()=>{
		expect(pinAttempts(20,Actions.completeAbort())).toBe(0);
	});
	it('Should return 0 when finished',()=>{
		expect(pinAttempts(20,Actions.finished())).toBe(0);
	});
});
