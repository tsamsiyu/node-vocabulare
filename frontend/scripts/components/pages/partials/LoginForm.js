import React from "react";
import FormInput from './FormInput';
import Form from './Form';
import { connect } from 'react-redux';

@connect((store) => {
    return {
        settings: store.get('settings')
    };
})
export default class LoginForm extends React.Component {
    render() {
        return (
            <div id="login_form-component">
                <Form action="/signin" id="login_form">
                    <FormInput name="login" label="Login"/>
                    <FormInput name="password" text="password" label="Password"/>
                    <button type="submit" className="btn btn-default">Sign in</button>
                </Form>
            </div>
        );
    }
}