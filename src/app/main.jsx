import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import App from './components/App.jsx';
import store from './store';

render(
  (
    <Provider store={ store }>
      <HashRouter>
        <Route path="/" component={ App } />
      </HashRouter>
    </Provider>
  ),
  document.getElementById('app')
);
