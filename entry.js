import { coreInit } from 'isolated-core';

coreInit({
  scriptURL: 'bundle.js',
  run(core) {
    require('./application').default(core);
  }
});
