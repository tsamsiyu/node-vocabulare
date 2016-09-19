import React from "react";
import LoginForm from './partials/LoginForm';
import { Link } from 'react-router';

export default class LoginPage extends React.Component {
    render() {
        return (
            <div id="login_page-component">
                <div className="row">
                    <div className="col-xs-12">
                        <h2>Login Form</h2>
                        <LoginForm/>
                        <br/>
                        <Link to="/signup">I'm not registered yet</Link>
                    </div>
                </div>
            </div>
        );
    }
}