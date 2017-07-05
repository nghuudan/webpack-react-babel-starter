import { CHAT_ERROR, CHAT_LIST } from '../actions/chat-actions';

const chat = (state = { error: {}, list: [] }, action) => {
  switch (action.type) {
  case CHAT_ERROR:
    return Object.assign({}, state, {
      error: action.error
    });
  case CHAT_LIST:
    return Object.assign({}, state, {
      list: action.list
    });
  default:
    return state;
  }
};

module.exports = chat;
