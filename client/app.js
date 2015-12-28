import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/scss/font-awesome.scss'
import '../styles/app.scss';

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import appReducer from  './reducers/mainReducer';
import routes from './routes';

const loggerMiddleware = createLogger({
    level: 'info',
    collapsed: true
});

const reducer = combineReducers(Object.assign({}, {app:appReducer}, {
    routing: routeReducer
}));

let store = compose(applyMiddleware(loggerMiddleware,thunk)(createStore))(reducer);
const history = createBrowserHistory();

syncReduxAndRouter(history, store);

render(
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>
, document.getElementById('app'));