import { combineReducers } from 'redux';
import demo from './demo-reducer';
import chat from './chat-reducer';

export default combineReducers({
  demo,
  chat
});
