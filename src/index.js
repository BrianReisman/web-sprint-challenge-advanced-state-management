import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import "./index.css";
import App from "./App";
import reducer from './reducers/index';

const { worker } = require("./mocks/browser");
worker.start();


const store = createStore(reducer, applyMiddleware(thunk, logger));
// console.log(store.getState())

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

//2. Create a store that includes thunk and logger middleware support.
