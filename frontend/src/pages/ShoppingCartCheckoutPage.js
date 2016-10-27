import React, { Component } from 'react';
import { connect } from 'react-redux';

import api from '../api.js';

export class ShoppingCartCheckoutPageRaw extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { items } =  this.props;
    const formItems = items.map(({ product, quantity }) => ({
      productId: product.id,
      quantity,
    }))

    const formData = new FormData(event.target);
    formData.append(
      'items',
      JSON.stringify(formItems)
    );

    api.post('orders/submit', formData)
      .then(({ data }) => console.log('data', data));
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Checkout</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <div>
              <label className="some-class" htmlFor="firstName">First Name</label>
            </div>
            <input
              value={this.state.firstName}
              onChange={event => this.setState({
                firstName: event.target.value.slice(0, 5),
              })}
              type="text"
              name="firstName"
              id="firstName"
            />
          </div>
          <div>
            <div><label htmlFor="lastName">Last Name</label></div>
            <input
              defaultValue="Doe"
              type="text"
              name="lastName"
              id="lastName"
            />
          </div>
          <div>
            <div><label htmlFor="address">Address</label></div>
            <input type="text" name="address" id="address" />
          </div>
          <div>
            <button type="submit">Submit Order</button>
          </div>
        </form>
      </div>
    );
  }
}

import { getItems } from '../components/ShoppingCart/reducer.js';

function mapStateToProps(state) {
  const { shoppingCart } = state;
  return {
    items: getItems(shoppingCart),
  };
}

export const ShoppingCartCheckoutPage = connect(
  mapStateToProps,
)(ShoppingCartCheckoutPageRaw);
