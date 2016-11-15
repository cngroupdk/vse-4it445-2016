import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { configureStore } from './store/configureStore.js';
import { loadState, saveState } from './store/localState.js';

const persistedState = loadState();
const store = configureStore(persistedState, saveState);

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
