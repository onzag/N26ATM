import * as Actions from '../index';
import * as ActionTypes from '../../constants/ActionTypes';
import * as AbortReasons from '../../constants/AbortReasons';

describe('Check action types',()=>{
	Object.keys(Actions).forEach((actionName)=>{
		it(actionName + ' represents a function',()=>{
			expect(Actions[actionName] instanceof Function).toBeTruthy();	
		});
	});
});

describe('Actions return an object',()=>{
	Object.keys(Actions).forEach((actionName)=>{

		let hasPayload = false;
		let argument = null;
		if (actionName === 'pinInserted'){
			hasPayload = true;
			argument = "1234";
		} else if (actionName === 'withdraw'){
			hasPayload = true;
			argument = 1000;
		} else if (actionName === 'performAbort'){
			hasPayload = true;
			argument = AbortReasons.NOT_ENOUGH_FUNDS;
		}
		let value = Actions[actionName](argument);

		it(actionName + ' returns an object',()=>{
			expect(typeof(value) === "object").toBeTruthy();
		});
		it(actionName + ' returns an object with type',()=>{
			expect(typeof(value.type) === "string").toBeTruthy();
		});
		if (hasPayload){
			it(actionName + ' has a payload',()=>{
				expect(typeof(value.payload)).not.toBeUndefined();
			});
			it(actionName + ' has a payload equal to the argument',()=>{
				expect(value.payload).toBe(argument);
			});
		}
	});
});

describe('Throw errors when no argument given',()=>{
	Object.keys(Actions).forEach((actionName)=>{

		if (actionName !== 'performAbort' && actionName !== 'pinInserted' && actionName !== 'withdraw') {
			return;
		}

		it(actionName + ' throws an error',()=>{
			expect(Actions[actionName]).toThrowError();
		});
	});
});
