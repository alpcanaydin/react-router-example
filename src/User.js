/* @flow */

import React, { Element } from 'react';

type UserPropsParamsType = {
  username: string
};

type UserPropsType = {
  params: UserPropsParamsType
};

const User = (props: UserPropsType): Element<*> =>
  <h1>{props.params.username}</h1>;

export default User;
