import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { setAppTitle } from '../actions/demo-actions';

class App extends Component {
  componentDidMount() {
    this.props.setAppTitle();
  }
  render() {
    return <h1>{ this.props.appTitle }</h1>;
  }
}

App.propTypes = {
  appTitle: PropTypes.string,
  setAppTitle: PropTypes.func
};

const mapStateToProps = state => {
  return {
    appTitle: state.demo.appTitle
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
