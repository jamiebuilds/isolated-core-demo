import { coreInit } from 'isolated-core';

coreInit({
  scriptURL: 'bundle.js',
  run(core) {
    core.ready(require('./app'));
  }
});
