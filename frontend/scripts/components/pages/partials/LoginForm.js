import React from "react";
import FormInput from './FormInput';
import AjaxForm from './AjaxForm';
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
                <AjaxForm action="/signin" id="login_form">
                    <FormInput name="User[loginOrEmail]" label="Login"/>
                    <FormInput name="User[password]" type="password" label="Password"/>
                    <button type="submit" className="btn btn-default">Sign in</button>
                </AjaxForm>
            </div>
        );
    }
}