/* @flow */

import React, { Element } from 'react';
import { Link } from 'react-router';

const Home = (): Element<*> => (
  <div>
    <strong>Anasayfa</strong><br />
    <Link to="/react-router-example/users">Kullanıcılar</Link>
    <Link to="/react-router-example/products">Ürünler</Link>
  </div>
);

export default Home;
