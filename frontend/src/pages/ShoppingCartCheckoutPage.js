import React, { Component } from 'react';

export class ShoppingCartCheckoutPage extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
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
            <input type="text" name="firstName" id="firstName" />
          </div>
          <div>
            <div><label htmlFor="lastName">Last Name</label></div>
            <input type="text" name="lastName" id="lastName" />
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
