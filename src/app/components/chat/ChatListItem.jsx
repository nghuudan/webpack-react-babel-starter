import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ChatListItem = props => {
  return <li>{ props.name } - { moment(props.createDate).format('MMMM D, YYYY h:mm:ss A') }</li>;
};

ChatListItem.propTypes = {
  name: PropTypes.string,
  createDate: PropTypes.date
};

export default ChatListItem;
