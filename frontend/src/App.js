import React, { Component } from 'react';
import { Router, applyRouterMiddleware, browserHistory } from 'react-router';
import { useScroll } from 'react-router-scroll';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { createRoutes } from './createRoutes.js';

export class App extends Component {
  render() {
    const routes = createRoutes();
    return (
      <div>
        <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
          {routes}
        </Router>
      </div>
    );
  }
}
