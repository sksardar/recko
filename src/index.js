import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import GraphTypes from "./graphTypes.js";
import Configs from "./configs.js";

import rootReducers from "./reducers"
import { updateData } from "./actions/entities.js"

const store = createStore(rootReducers, {}, applyMiddleware(thunk));

// setTimeout(() => store.dispatch(updateData()), 3000)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
