import state from '../state';
import * as AbortReasons from '../../constants/AbortReasons';
import * as States from '../../constants/States';
import * as Actions from '../../actions';

describe('Check state reducer return value',()=>{
	it('Should return the same state when no action',()=>{
		Object.keys(States).forEach((stateConstant)=>{
			expect(state(stateConstant,{'type':'@@Redux/INIT'})).toBe(stateConstant);	
		});
	});
	it('Should return processing card when card inserted',()=>{
		expect(state(null,Actions.cardInserted())).toBe(States.PROCESSING_CARD);
	});
	it('Should return waiting for pin when card processed',()=>{
		expect(state(null,Actions.cardProcessed())).toBe(States.WAITING_FOR_PIN);
	});
	it('Should return processing pin when pin inserted',()=>{
		expect(state(null,Actions.pinInserted("1234"))).toBe(States.PROCESSING_PIN);
	});
	it('Should return waiting for pin when pin invalid',()=>{
		expect(state(null,Actions.pinProcessedInvalid())).toBe(States.WAITING_FOR_PIN);
	});
	it('Should return waiting for amount when pin valid',()=>{
		expect(state(null,Actions.pinProcessedValid())).toBe(States.WAITING_FOR_AMOUNT);
	});
	it('Should return processing amount when withdraw',()=>{
		expect(state(null,Actions.withdraw(1234))).toBe(States.PROCESSING_AMOUNT);
	});
	it('Should return delivering when withdraw suscesful',()=>{
		expect(state(null,Actions.withdrawSuscesful())).toBe(States.DELIVERING);
	});
	it('Should return delivered when money delivered',()=>{
		expect(state(null,Actions.moneyDelivered())).toBe(States.DELIVERED);
	});
	it('Should return done when card and money taken',()=>{
		expect(state(null,Actions.cardAndMoneyTaken())).toBe(States.DONE);
	});
	it('Should return waiting for card when finished',()=>{
		expect(state(null,Actions.finished())).toBe(States.WAITING_FOR_CARD);
	});
	it('Should return aborting when performing an abort',()=>{
		expect(state(null,Actions.performAbort(AbortReasons.USER_CANCELS))).toBe(States.ABORTING);
	});
	it('Should return waiting for card when abort completed',()=>{
		expect(state(null,Actions.completeAbort())).toBe(States.WAITING_FOR_CARD);
	});
});
