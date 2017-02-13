/* @flow */

import React, { Element, PropTypes } from 'react';
import { Link } from 'react-router';

import './Products.css';

type ProductsPropsType = {
  children: Element<*>
}

const Products = (props: ProductsPropsType) => (
  <div className="products">
    <strong>Menu: </strong>
    <Link to="/react-router-example/products/all" activeClassName="active">Tüm Ürünler</Link>
    <Link to="/react-router-example/products/active" activeClassName="active">Aktif Ürünler</Link>
    <Link to="/react-router-example/products/passive" activeClassName="active">Pasif Ürünler</Link>
    <hr />

    {props.children}
  </div>
);

Products.propTypes = {
  children: PropTypes.element.isRequired
};

export default Products;
