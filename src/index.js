import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { store } from './redux/store.js';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
      <h1 class="ui dividing centered header">Popular Products</h1>
      <App />
    </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
