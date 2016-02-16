import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'

import reducer from './reducers';
import App from './components/App';

function storeState({ getState }) {
  return (next) => (action) => {
    let returnValue = next(action);
    window.top.state = getState();
    return returnValue;
  };
}

const store = createStore(
  reducer,
  window.top.state,
  applyMiddleware(storeState)
);

export function attach(uidocument) {
  render((
    <Provider store={store}>
      <App/>
    </Provider>
  ), uidocument.getElementById('root'));
}

export function detach(uidocument) {
  unmountComponentAtNode(uidocument.getElementById('root'));
}
