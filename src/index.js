import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import 'bootstrap/dist/css/bootstrap.css';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const store = createStoreWithMiddleware(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>,

document.getElementById('root'));
