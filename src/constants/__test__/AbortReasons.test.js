import * as AbortReasons from '../AbortReasons';

describe('Abort reason constant name is the same as constant value',()=>{
	Object.keys(AbortReasons).forEach((abortReason)=>{
		it(abortReason + ' is equal to its value',()=>{
			expect(AbortReasons[abortReason]).toBe(abortReason);	
		});
	});
});
