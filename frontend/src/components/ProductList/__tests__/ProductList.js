import React from 'react';
import TestUtils from 'react-addons-test-utils';

import { ProductList } from '../ProductList';
import { ProductListItem } from '../ProductListItem';

describe('ProductList', () => {
  it('renders empty if no products', () => {
    const mockProducts = [];
    const renderer = TestUtils.createRenderer();

    renderer.render(<ProductList products={mockProducts} />);

    uexpect(
      renderer,
      'to have rendered with all children',
      <div>
      </div>
    );
  });





  it('renders all products', () => {
    const mockProductOne = { id: 1 };
    const mockProductTwo = { id: 2 };
    const mockProducts = [
      mockProductOne,
      mockProductTwo,
    ];

    const renderer = TestUtils.createRenderer();
    renderer.render(<ProductList products={mockProducts} />);

    uexpect(
      renderer,

      'to have rendered with all children',

      <div>
        <ProductListItem product={mockProductOne} />
        <ProductListItem product={mockProductTwo} />
      </div>
    );
  });
});
