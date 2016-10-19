import React, { Component } from 'react';
import lodash from 'lodash';
import { connect } from 'react-redux';

import {
  resetCart,
  removeCartProduct,
} from '../actions';

export class ShoppingCartPageRaw extends Component {
  render() {
    const {
      shoppingCart,
      resetCart,
      removeCartProduct,
    } = this.props;
    return (
      <div>
        <div className="jumbotron">
          <h1>Shopping Cart</h1>
        </div>
        <button onClick={() => resetCart()}>
          Reset!
        </button>
        {lodash.values(shoppingCart).map(({ product, count }) => (
          <div key={product.id}>
            <h3>{count} x {product.title}</h3>
            <button onClick={() => removeCartProduct(product.id)}>
              Remove
            </button>
            <br />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { shoppingCart } = state;

  return {
    shoppingCart,
  };
}

export const ShoppingCartPage = connect(
  mapStateToProps,
  {
    resetCart,
    removeCartProduct,
  }
)(ShoppingCartPageRaw);
