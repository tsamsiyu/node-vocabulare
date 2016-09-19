import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import './resources/style/index.css';

// import React from "react";
import ReactDOM from "react-dom";
// import { Router, Route, browserHistory, Redirect } from 'react-router';
// import LoginPage from './components/pages/LoginPage';
// import RegisterPage from './components/pages/RegisterPage';
// import { store } from './bootstrap';
// import MainLayout from './components/layouts/MainLayout';
// import { Provider } from 'react-redux';
// import OnlyGuest from './components/auth/OnlyGuest';
// import OnlyLoggedUser from './components/auth/OnlyLoggedUser';
//
// import ApplicationContainer from './components/ApplicationContainer';
//
// ReactDOM.render(
//     <Provider store={store}>
//         <Router history={browserHistory}>
//             <Route component={OnlyGuest(MainLayout)}>
//                 <Redirect from="/" to="/signin" />
//                 <Route path="/signin" component={LoginPage} />
//                 <Route path="/signup" component={RegisterPage} />
//             </Route>
//             <Route component={OnlyLoggedUser(MainLayout)}>
//                 <Route path="/account" component={ApplicationContainer} />
//             </Route>
//         </Router>
//     </Provider>,
// document.getElementById('app'));

ReactDOM.render(
    <div>Hello world</div>
, document.getElementById('app'));