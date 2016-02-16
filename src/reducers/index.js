import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  counter: 0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.COUNTER_INCREMENT:
      return Object.assign({}, state, {
        counter: state.counter + 1
      });
    case ActionTypes.COUNTER_DECREMENT:
      return Object.assign({}, state, {
        counter: state.counter - 1
      });
    default:
      return state;
  }
}
