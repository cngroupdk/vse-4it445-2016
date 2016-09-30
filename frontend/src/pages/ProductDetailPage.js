import React, { Component } from 'react';
import classNames from 'classnames';

export class ProductDetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTabId: 0,
    };
  }

  selectTab(event, tabId) {
    this.setState({
      activeTabId: tabId,
    });
  }

  renderTab(activeTabId) {
    if (activeTabId === 0) {
      return <div>1</div>;
    }
    return <div>2</div>
  }

  render() {
    const { productId } = this.props.params;
    const { activeTabId } = this.state;

    return (
      <div>
        <div className="jumbotron">
          <h1>Škoda Superb</h1>
        </div>
        <div className="product">
          <ul className="nav nav-tabs">
            <li role="presentation" className={classNames(
              'abc',
              'x123',
              { active: 0 === activeTabId,
                isTrue: true,
                isFalse: false,
              }
            )}>
              <a href="#" onClick={(event) => this.selectTab(event, 0)}>
                Description
              </a>
            </li>
            <li role="presentation" className={classNames({ active: 1 === activeTabId })}>
              <a href="#" onClick={(event) => this.selectTab(event, 1)}>
                Parameters
              </a>
            </li>
          </ul>
          {this.renderTab(activeTabId)}

          <h3>id: {productId}</h3>
          <p>price: <span className="price">750 000 Kč</span></p>
          <p>Luxury car produced in the Czech Republic.</p>
        </div>
      </div>
    );
  }
}
