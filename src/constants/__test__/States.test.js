import * as States from '../States';

describe('States value name is the same as constant value',()=>{
	Object.keys(States).forEach((state)=>{
		it(state + ' is equal to its value',()=>{
			expect(States[state]).toBe(state);	
		});
	});
});
