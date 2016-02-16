import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import reducer from './reducers';
import App from './components/App';

const store = createStore(reducer);

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
