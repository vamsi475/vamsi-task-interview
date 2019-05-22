import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider } from "react-redux";
import connectStore from "./redux/store";

ReactDOM.render(
    <Provider store={connectStore()}>
        <App />
    </Provider>
    , document.getElementById('root'));


serviceWorker.unregister();
