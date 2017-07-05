import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { setAppTitle } from '../actions/demo-actions';
import ChatList from './chat/ChatList.jsx';

class App extends Component {
  componentDidMount() {
    this.props.setAppTitle();
  }
  render() {
    return (
      <div className="chat-app">
        <h1>{ this.props.appTitle }</h1>
        <p>{ this.props.chatError.message }</p>
        <ChatList></ChatList>
      </div>
    );
  }
}

App.propTypes = {
  appTitle: PropTypes.string,
  setAppTitle: PropTypes.func,
  chatError: PropTypes.object
};

const mapStateToProps = state => {
  return {
    appTitle: state.demo.appTitle,
    chatError: state.chat.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setAppTitle() {
      dispatch(setAppTitle(true));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
