import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { configureStore } from './store/configureStore.js';

const store = configureStore()


const a = {
  q: 1,
  w: 2,
}

const b = {
  t: 10,
  w: 1,
}

const c = [1, 2, 3]
const d = [...c, 4, 5, 6]

console.log('merge', { ...a, ...b, "d": d },);


ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
