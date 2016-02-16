import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import { loadCore } from 'isolated-core';

import reducer from './reducers';
import { setState } from './actions/actions'
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

export function setup(state) {
  store.dispatch(setState(state))
}

require('webpack/hot/dev-server');
require('webpack-dev-server/client?http://0.0.0.0:8080');

// FIXME: hacky approach to accepting all child updates -- is there a better way?
module.hot.accept(Object.keys(__webpack_require__.c), () => {
  console.log('=== swapping core ===')
  loadCore({
    scriptURL: 'bundle.js'
  }).then(function(core) {
    core.launchCore(store.getState());
  }, function(core) {
    console.error(`core #${core.id} failed to load: ${core.type} error`)
    core.destroyCore();
  });
});
