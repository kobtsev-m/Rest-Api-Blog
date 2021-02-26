import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// react-router-dom
import { BrowserRouter } from 'react-router-dom';

// Bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// react-redux
import { Provider } from 'react-redux';
import store from './redux/store';

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));
