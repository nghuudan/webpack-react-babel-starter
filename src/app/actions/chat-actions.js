import axios from 'axios';

export const CHAT_ERROR = 'CHAT_ERROR';
export const CHAT_LIST = 'CHAT_LIST';

export const chatError = error => {
  return {
    type: CHAT_ERROR,
    error
  };
};

export const chatList = list => {
  return {
    type: CHAT_LIST,
    list
  };
};

export const fetchChatList = () => {
  return axios.get('/api/chats').then(res => res.data);
};

export const setChatList = () => {
  return dispatch => fetchChatList().then(
    res => dispatch(chatList(res)),
    err => dispatch(chatError(err))
  );
};
