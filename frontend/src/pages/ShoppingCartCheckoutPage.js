import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

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
            {[['firstName', 'First name'], ['lastName', 'Last name'], ['address', 'Address']].map(([key, label]) => {
              return (
                <FormGroup key={key} controlId={key}>
                  <ControlLabel>{label}</ControlLabel>
                  <FormControl type="text" name={key} />
                  <HelpBlock>helper text</HelpBlock>
                </FormGroup>
              );
            })}
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
