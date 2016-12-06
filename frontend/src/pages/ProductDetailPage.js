import React, { Component } from 'react';

import Tabs from '../components/common/Tabs.js';
import api from '../api.js';
import { AddProductToCartButtonContainer } from '../components/ShoppingCart/AddProductToCartButton.js';

export class ProductDetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: null,
    };
  }

  componentDidMount() {
    const { productId } = this.props.params;
    api(`products/${productId}`,
      {
        params: {
          filter: { include: "category" },
        },
      }
    ).then((response) => {
      this.setState({ product: response.data });
    });
  }

  render() {
    const { product } = this.state;
    if (!product) {
      return <div>Loading...</div>;
    }

    const {
      category,
      title,
      price,
      shortInfo,
    } = product;
    const {
      name: categoryName,
    } = category || {};

    const tabs = [
      { label: 'Description', render: () => <button>hello 1</button> },
      { label: 'Parameters', render: () => <button>hello 2</button> },
      { label: 'Attributes', render: () => (
        <div>
          <h2>Attributes</h2>
          <ul>
            <li>abc</li>
            <li>123</li>
          </ul>
        </div>
      ) },
    ];

    return (
      <div>
        <div className="jumbotron">
          <h1>{title}</h1>
        </div>
        <div className="pull-right">
          <AddProductToCartButtonContainer product={product} />
        </div>
        <h3>{ categoryName }</h3>
        <p>price: <span className="price">{price} Kč</span></p>
        <p>{shortInfo}</p>

        <div className="product">
          <Tabs tabs={tabs} />
        </div>
      </div>
    );
  }
}
