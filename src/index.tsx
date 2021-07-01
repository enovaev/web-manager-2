import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from 'store';
import { AppPages } from './pages';

const rootElement = document.getElementById('root-app');

render(
  <Provider  store={store}>
    <Router>
      <AppPages />
    </Router>
  </Provider>,
  rootElement
);
