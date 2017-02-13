/* @flow */

import React, { Element, PropTypes } from 'react';

type AppPropsType = {
  children: Element<*>
};

const App = (props: AppPropsType): Element<*> => (
  <div>
    <h1>Header</h1>
    <hr />

    {props.children}

    <hr />
    <h1>Footer</h1>
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
