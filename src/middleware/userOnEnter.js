/* @flow */

const userOnEnter = (nextState: Object, replacer: Function) => {
  if (nextState.params.username === 'burak') {
    replacer('/');
  }
};

export default userOnEnter;
