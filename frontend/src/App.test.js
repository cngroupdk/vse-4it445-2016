import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const subscribe = jest.fn();
  const dispatch = jest.fn();
  const getState = jest.fn();
  ReactDOM.render(<App store={{ subscribe, dispatch, getState }} />, div);
  expect(subscribe.mock.calls).toEqual([]);
  expect(dispatch.mock.calls).toEqual([]);
  expect(getState.mock.calls).toEqual([]);
});
