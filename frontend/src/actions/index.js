
export const DUMMY_ACTION = 'DUMMY_ACTION';
export const SHOPPING_CART_ADD_PRODUCT = 'SHOPPING_CART_ADD_PRODUCT';
export const SHOPPING_CART_RESET = 'SHOPPING_CART_RESET';
export const SHOPPING_CART_REMOVE_PRODUCT = 'SHOPPING_CART_REMOVE_PRODUCT';

export const dummyAction = data => {
  return {
    type: DUMMY_ACTION,
    data,
    hello: [1, 2, 3],
    world: "!",
  };
};

export const addToCart = product => {
  return {
    type: SHOPPING_CART_ADD_PRODUCT,
    product,
  };
};

export const resetCart = () => {
  return { type: SHOPPING_CART_RESET };
}

export const removeCartProduct = productId => {
  return {
    type: SHOPPING_CART_REMOVE_PRODUCT,
    productId,
  };
}
