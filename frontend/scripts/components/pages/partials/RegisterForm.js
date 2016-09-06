import React from "react";
import FormInput from './FormInput';
import AjaxForm from './AjaxForm';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


@connect((store) => {
    return {
        settings: store.get('settings')
    };
})
export default class RegisterForm extends React.Component {

    constructor() {
        super();
        this.state = {
            birthday: null
        };
    }

    handleBirthdayChange(date) {
        this.setState({
            birthday: date
        });
    }

    render() {
        return (
            <div id="register_form-component">
                <AjaxForm action="/signup" id="register_form">
                    <FormInput name="User[firstName]" label="First name"/>
                    <FormInput name="User[lastName]" label="Last name"/>
                    <FormInput name="User[email]" label="Email" type="email"/>
                    <FormInput name="User[login]" label="Login"/>
                    <FormInput name="User[birthday]" label="Birthday">
                        <DatePicker className="form-control"
                                    id="birthday"
                                    selected={this.state.birthday}
                                    onChange={this.handleBirthdayChange.bind(this)}/>
                    </FormInput>
                    <FormInput name="User[password]" label="Password" />
                    <FormInput name="User[passwordRepeat]" label="Password repeat" />
                    <button type="submit" className="btn btn-default">Sign up</button>
                </AjaxForm>
            </div>
        );
    }
}