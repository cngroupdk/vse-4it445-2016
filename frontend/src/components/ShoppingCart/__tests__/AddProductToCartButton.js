import React from 'react';
import TestUtils from 'react-addons-test-utils';

import { AddProductToCartButton } from '../AddProductToCartButton';

describe('AddProductToCartButton', () => {
  it('renders icon and title', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<AddProductToCartButton />);

    uexpect(
      renderer,
      'to have rendered',
      <button>
        <span
          className="glyphicon glyphicon-shopping-cart"
        /> Add to cart
      </button>
    );
  });

  it('handles click events', () => {
    const mockProduct = { id: 1, title: 'Hello' };
    const mockOnClick = jest.fn();
    const renderer = TestUtils.createRenderer();
    renderer.render(
      <AddProductToCartButton
        product={mockProduct}
        addToCart={mockOnClick}
      />
    );

    uexpect(
      renderer,
      'with event',
      'click'
    );

    uexpect(mockOnClick.mock.calls, 'to satisfy', [[mockProduct]]);
  });
});
