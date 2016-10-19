import { combineReducers } from 'redux';
import {
  SHOPPING_CART_ADD_PRODUCT,
  SHOPPING_CART_RESET,
  SHOPPING_CART_REMOVE_PRODUCT,
} from '../actions';

const dummy = (state=0, action) => {
  console.log('---- action:', action, 'state:', state);

  switch (action.type) {
    case 'DUMMY_ACTION':
      return state + 1;
    default:
      return state;
  }
}

const shoppingCart = (state={}, action) => {
  switch (action.type) {
    case SHOPPING_CART_RESET:
      return {};

    case SHOPPING_CART_ADD_PRODUCT:
      const { product } = action;
      const { count: oldCount } = state[product.id] || { count: 0 };

      const newCartItem = {
        count: 1 + oldCount,
        product,
      };

      return {
        ...state,
        [product.id]: newCartItem,
      };

    case SHOPPING_CART_REMOVE_PRODUCT:
      const { productId } = action;

      const newState = {
        ...state,
      };
      delete newState[productId];

      return newState;

    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  dummy,
  shoppingCart,
});
