import pin from '../pin';
import * as AbortReasons from '../../constants/AbortReasons';
import * as Actions from '../../actions';

describe('Check pin reducer return value',()=>{
	it('Should return null when null state',()=>{
		expect(pin(null,{'type':'@@Redux/INIT'})).toBeNull();
	});
	it('Should return null when performing abort',()=>{
		expect(pin('STATE',Actions.performAbort(AbortReasons.NOT_ENOUGH_FUNDS))).toBeNull();
	});
	it('Should return null when completing abort',()=>{
		expect(pin('STATE',Actions.completeAbort())).toBeNull();
	});
	it('Should return null when pin valid',()=>{
		expect(pin('STATE',Actions.pinProcessedValid())).toBeNull();
	});
	it('Should return null when pin invalid',()=>{
		expect(pin('STATE',Actions.pinProcessedInvalid())).toBeNull();
	});
	it('Should return the payload when pin inserted',()=>{
		expect(pin(null,Actions.pinInserted("1234"))).toBe("1234");
	});
});
