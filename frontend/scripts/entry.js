import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from 'react-router';
import LoginPage from './components/pages/LoginPage';
import { store } from './bootstrap';
import MainLayout from './components/layouts/MainLayout';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route component={MainLayout}>
                <Route path="/" component={LoginPage} />
            </Route>
        </Router>
    </Provider>,
document.getElementById('app'));