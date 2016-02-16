import * as ActionTypes from '../constants/ActionTypes';

export function counterIncrement() {
  return { type: ActionTypes.COUNTER_INCREMENT };
}

export function counterDecrement() {
  return { type: ActionTypes.COUNTER_DECREMENT };
}
