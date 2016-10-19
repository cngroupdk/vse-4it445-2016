import { combineReducers } from 'redux';

const dummy = (state = 0, action) => {
  console.log('---- action:', action, 'state:', state);
  switch (action.type) {
    case 'DUMMY_ACTION':
      return state + 1;
    default:
      return state;
  }
}

import {
  SHOPING_CART_ADD_PRODUCT,
  SHOPING_CART_RESET,
} from '../actions';

const shoppingCart = (state={}, action) => {
  switch (action.type) {
    case SHOPING_CART_ADD_PRODUCT:

      const { product } = action;
      const { count: oldCount } = state[product.id] || { count: 0 };

      const newCartItem = {
        product,
        count: oldCount + 1,
      };
      return {
        ...state,
        [product.id]: newCartItem,
      };
    case SHOPING_CART_RESET:
      return {};

    default:
      return state;
  }
}





export const rootReducer = combineReducers({
  dummy,
  shoppingCart,
});
