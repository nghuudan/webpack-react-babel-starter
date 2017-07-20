import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { setAppTitle } from '../src/app/actions/demo-actions';
import App from '../src/app/components/App.jsx';

const mockStore = configureMockStore([thunk]);

describe('<App />', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore({ demo: {} });
    wrapper = shallow(<App store={ store } />);
  });

  it('should set appTitle to string', () => {
    return store.dispatch(setAppTitle(true)).then(() => {
      const appTitle = wrapper.props().appTitle;
      expect(appTitle).to.be.a('string');
    });
  });

  it('should set appTitle to "App Works!"', () => {
    return store.dispatch(setAppTitle(true)).then(() => {
      const appTitle = wrapper.props().appTitle;
      expect(appTitle).to.equal('App Works!');
    });
  });
});
