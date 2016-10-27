import React, { Component } from 'react';

import api from '../api.js';

export class ShoppingCartCheckoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append(
      'items',
      JSON.stringify([
        {productId: 1, quantity: 10},
        {productId: 2, quantity: 1},
      ])
    );

    api.post('orders/submit', formData)
      .then(response =>
        console.log('-- response', response)
      );
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Checkout</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <div><label htmlFor="firstName">First Name</label></div>
            <input
              value={this.state.firstName}
              onChange={e => this.setState({
                firstName: e.target.value.slice(0, 5)
              })}
              type="text" name="firstName" id="firstName"
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
