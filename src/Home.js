/* @flow */

import React, { Element } from 'react';
import { Link } from 'react-router';

const Home = (): Element<*> => (
  <div>
    <strong>Anasayfa</strong><br />
    <Link to="/users">Kullanıcılar</Link>
    <Link to="/products">Ürünler</Link>
  </div>
);

export default Home;
