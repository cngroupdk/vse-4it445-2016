
export const DUMMY_ACTION = 'DUMMY_ACTION';
export const SHOPING_CART_ADD_PRODUCT = 'SHOPING_CART_ADD_PRODUCT';
export const SHOPING_CART_RESET = 'SHOPING_CART_RESET';

export const addToCart = product => {
  return {
    type: SHOPING_CART_ADD_PRODUCT,
    product,
  };
};

export const resetCart = () => {
  return {
    type: SHOPING_CART_RESET,
  }
}

export const dummyAction = data => {
  return {
    type: DUMMY_ACTION,
    data,
    hello: 123,
  };
};
