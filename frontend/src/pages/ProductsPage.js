import React, { Component } from 'react';

import api from '../api.js';
import { ProductList } from '../components/ProductList/ProductList.js';

export class ProductsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: null,
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {
    const searchTerm = event.target.value;
    this.fetchProducts(searchTerm);
  }

  paramsForSerchTerm(searchTerm) {
    if (!searchTerm) { return {}; }
    return {
      filter: {
        where: {
          title: { like: `%${searchTerm}%` },
        },
      },
    };
  }

  fetchProducts(searchTerm) {
    api('products', {
      params: this.paramsForSerchTerm(searchTerm)
    })
      .then((response) => {
        this.setState({ products: response.data });
      });
  }

  componentDidMount() {
    this.fetchProducts();
  }

  render() {
    const { products } = this.state;

    return (
      <div>
      <div>
        <label>Search: </label>
        <input
          type="text"
          onChange={this.handleSearchChange}
        />
      </div>
        <div className="jumbotron">
          <h1>All Products</h1>
        </div>
        {products === null ?
          <div>Loading...</div> :
          <ProductList products={products}/>
        }
      </div>
    );
  }
}
