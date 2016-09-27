import React, { Component } from 'react';

export class ShopsPage extends Component {
  render() {
    const { shopId } = this.props.params;

    return (
      <div>
        <h1>All Shops: {shopId}</h1>
      </div>
    );
  }
}
