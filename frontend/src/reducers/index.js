import { combineReducers } from 'redux';

import shoppingCart from '../components/ShoppingCart/reducer.js';
import { setAuthToken } from '../api.js';

const dummy = (state=0, action) => {
  console.log('---- action:', action, 'state:', state);

  switch (action.type) {
    case 'DUMMY_ACTION':
      return state + 1;
    default:
      return state;
  }
}

const auth = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      const {
        userId,
        authToken,
      } = action;

      setAuthToken(authToken);

      return {
        ...state,
        userId,
        authToken,
      };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  auth,
  dummy,
  shoppingCart,
});
