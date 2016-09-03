import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory, Redirect } from 'react-router';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import { store } from './bootstrap';
import MainLayout from './components/layouts/MainLayout';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route component={MainLayout}>
                {/*<Redirect from="/" to="/signin" />*/}
                {/*<Route path="/signin" component={LoginPage} />*/}
                <Route path="/" component={RegisterPage} />
            </Route>
        </Router>
    </Provider>,
document.getElementById('app'));