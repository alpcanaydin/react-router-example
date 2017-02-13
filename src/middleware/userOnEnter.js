/* @flow */

const userOnEnter = (nextState: Object, replacer: Function) => {
  if (nextState.params.username === 'burak') {
    replacer('/react-router-example');
  }
};

export default userOnEnter;
