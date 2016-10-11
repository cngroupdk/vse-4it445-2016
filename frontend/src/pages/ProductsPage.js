import React, { Component } from 'react';
import axios from 'axios';

import { ProductList } from '../components/ProductList/ProductList.js';

export class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    console.log('did mont');
    axios('http://dev.backend.horato02.vse.handson.pro/api/products')
      .then((response) => {
        console.log('response', response.data)
        this.setState({
          products: response.data
        });
      })
  }

  addNewProduct() {
    console.log('this', this);
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        <div className="jumbotron">
          <button
            onClick={this.addNewProduct.bind(this)}
          >click me</button>
          <h1>All Products</h1>
        </div>
        <ProductList products={products}/>
      </div>
    );
  }
}
