/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  IndexRoute,
  IndexRedirect,
  browserHistory
} from 'react-router';

import userOnEnter from './middleware/userOnEnter';

import App from './App';
import Home from './Home';

import Users from './Users';
import User from './User';

import Products from './Products';
import ProductsAll from './ProductsAll';
import ProductsActive from './ProductsActive';
import ProductsPassive from './ProductsPassive';

import './index.css';

const Root = () => (
  <Router history={browserHistory}>
    <Route path="/react-router-example" component={App}>
      <IndexRoute component={Home} />

      {/* Users */}
      <Route path="users" component={Users} />
      <Route path="user/:username" component={User} onEnter={userOnEnter} />

      {/* Products */}
      <Route path="products" component={Products}>
        <IndexRedirect to="all" />
        <Route path="all" component={ProductsAll} />
        <Route path="active" component={ProductsActive} />
        <Route path="passive" component={ProductsPassive} />
      </Route>
    </Route>
  </Router>
);

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
