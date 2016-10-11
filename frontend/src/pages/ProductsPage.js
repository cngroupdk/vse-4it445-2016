import React, { Component } from 'react';
import axios from 'axios';

import { ProductList } from '../components/ProductList/ProductList.js';

export class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    axios('http://dev.backend.horato01.vse.handson.pro/api/products')
      .then((response) => {
        this.setState({
          products: response.data
        });
      });
  }

  addNewProduct() {

  }

  render() {
    const { products } = this.state;

    return (
      <div>
        <div className="jumbotron">
          <h1>All Products</h1>
        </div>
        <button onClick={this.addNewProduct.bind(this)}>
          click me
        </button>
        <ProductList products={products}/>
      </div>
    );
  }
}
