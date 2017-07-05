import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setChatList } from '../../actions/chat-actions';
import ChatListItem from './ChatListItem.jsx';

class ChatList extends Component {
  componentDidMount() {
    this.props.setChatList();
  }
  render() {
    return (
      <ul className="chat-list">
        {
          this.props.list.map(chat => {
            return (
              <ChatListItem
                key={ chat.id }
                name={ chat.name }
                createDate={ chat.createDate }
              />
            );
          })
        }
      </ul>
    );
  }
}

ChatList.propTypes = {
  list: PropTypes.array,
  setChatList: PropTypes.func
};

const mapStateToProps = state => {
  return {
    list: state.chat.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setChatList() {
      dispatch(setChatList());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
