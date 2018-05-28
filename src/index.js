import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import BrowserRouter from 'react-router-dom/es/BrowserRouter';
import configureStore from './store/configureStore.js';
import {Provider} from 'react-redux';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));

registerServiceWorker();
