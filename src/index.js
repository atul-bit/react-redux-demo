import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// 
// import {createStore} from 'redux'
import {Provider} from 'react-redux'
import thunk from "redux-thunk" 
import rootReducer from './service/reducers/index'
import {applyMiddleware, compose, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
const middlewares = [ReduxThunk]
const store=createStore(rootReducer,compose(applyMiddleware(...middlewares)))
console.log("store in index.js", store)
// 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
