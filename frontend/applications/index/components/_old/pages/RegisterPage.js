import React from "react";
import RegisterForm from './partials/RegisterForm';

export default class RegisterPage extends React.Component {
    render() {
        return (
            <div id="register_page-component">
                <h2>Register Form</h2>
                <RegisterForm/>
            </div>
        );
    }
}