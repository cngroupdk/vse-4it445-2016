import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

const add = (a, b) => b + a

it('test 1 + 1 = 2', () => {
  expect(add(3, 3)).toBe(6);

  uexpect(
    add(1, 1),
    'to be',
    2
  );

  uexpect(
    add(2, 2),
    'to be',
    4
  );

  uexpect(
    [ 1, 2 ],

    'to contain',

    2,
    1,
  );
});









it('renders without crashing', () => {
  const div = document.createElement('div');
  const subscribe = jest.fn();
  const dispatch = jest.fn();
  const getState = jest.fn();

  ReactDOM.render(
    <App
      store={{ subscribe, dispatch, getState }}
    />,
    div
  );

  expect(subscribe.mock.calls).toEqual([]);
  expect(dispatch.mock.calls).toEqual([]);
  expect(getState.mock.calls).toEqual([]);
});
