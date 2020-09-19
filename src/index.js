import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
import * as serviceWorker from './serviceWorker';
import App from './App';

axios.defaults.baseURL = 'https://cryptic-dusk-41955.herokuapp.com'; //'http://127.0.0.1:1337';

//axios.defaults.headers['Cockpit-Token'] = process.env.REACT_APP_API_KEY;

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
