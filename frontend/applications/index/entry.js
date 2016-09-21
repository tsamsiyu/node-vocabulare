import './resources';
import { store } from './bootstrap';
import ReactDOM from "react-dom";
import { Router, Route, browserHistory, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import SigninTemplate from './components/visible/templates/guest/SigninTemplate';
import SignupTemplate from './components/visible/templates/guest/SignupTemplate';
import HomeTemplate from './components/visible/templates/account/HomeTemplate';
import GuestOnly from './components/operative/auth/GuestOnly';
import UserOnly from './components/operative/auth/UserOnly';
import AppStart from './components/operative/auth/AppStart';

const emptyComponent = (props) => props.children;

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route component={AppStart(emptyComponent)}>
                <Route component={UserOnly(emptyComponent)}>
                    <Redirect from="/" to="/home" />
                    <Route path="/home" component={HomeTemplate} />
                </Route>
                <Route component={GuestOnly(emptyComponent)}>
                    <Redirect from="/" to="/signin" />
                    <Route path="/signin" component={SigninTemplate} />
                    <Route path="/signup" component={SignupTemplate} />
                </Route>
            </Route>
        </Router>
    </Provider>,
document.getElementById('app'));