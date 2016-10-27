import React, { Component } from 'react';
import lodash from 'lodash';

import api from '../api.js';
import { ProductList } from '../components/ProductList/ProductList.js';

export class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
    };

    this.fetchProductsDebounced = lodash.debounce(
      this.fetchProducts,
      500
    );
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {
    const searchString  = event.target.value;
    this.fetchProductsDebounced(searchString);
  }

  paramsForSerchString(searchString) {
    if (!searchString) { return {}; }
    return {
      filter: {
        where:
          { title: { like: `%${searchString}%` },
        },
      },
    }
  }

  fetchProducts(searchString) {
    api('products', { params: this.paramsForSerchString(searchString) })
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
            onChange={this.handleSearchChange}
            type="text"
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
