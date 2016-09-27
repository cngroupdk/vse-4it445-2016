import React, { Component } from 'react';

import { ProductList } from '../components/ProductList/ProductList.js';

export class ProductsPage extends Component {
  render() {
    const products = [
      {
        id: 1,
        title: 'Škoda Superb',
        price: '750 000',
        shortInfo: 'Luxury car produced in the Czech Republic.',
      },
      {
        id: 2,
        title: 'Ford Focus',
        price: '600 000',
        shortInfo: 'Sports car made in USA.',
      },
      {
        id: 3,
        title: 'Moped',
        price: '1 000',
        shortInfo: 'No comment.',
      },
    ]
    return (
      <div>
        <div className="jumbotron">
          <h1>All Products</h1>
        </div>
        <ProductList products={products}/>
      </div>
    );
  }
}
