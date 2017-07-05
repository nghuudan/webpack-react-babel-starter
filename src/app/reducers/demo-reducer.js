import { APP_TITLE } from '../actions/demo-actions';

const demo = (state = {}, action) => {
  switch (action.type) {
  case APP_TITLE:
    return Object.assign({}, state, {
      appTitle: action.title
    });
  default:
    return state;
  }
};

export default demo;
