import * as ActionTypes from '../ActionTypes';

describe('Action type name is the same as constant value',()=>{
	Object.keys(ActionTypes).forEach((actionType)=>{
		it(actionType + ' is equal to its value',()=>{
			expect(ActionTypes[actionType]).toBe(actionType);	
		});
	});
});
