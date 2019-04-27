import React from 'react';
import ReactDom from 'react-dom';
import App from './component/app';
import {Provider} from "react-redux";
import store from './redux/store'
import './index.css';

ReactDom.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root'));