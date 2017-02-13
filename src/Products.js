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
    <Link to="/products/all" activeClassName="active">Tüm Ürünler</Link>
    <Link to="/products/active" activeClassName="active">Aktif Ürünler</Link>
    <Link to="/products/passive" activeClassName="active">Pasif Ürünler</Link>
    <hr />

    {props.children}
  </div>
);

Products.propTypes = {
  children: PropTypes.element.isRequired
};

export default Products;
