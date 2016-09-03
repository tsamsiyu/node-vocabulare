import React from "react";
import FormInput from './FormInput';
import Form from './Form';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';


@connect((store) => {
    return {
        settings: store.get('settings')
    };
})
export default class RegisterForm extends React.Component {

    constructor() {
        super();
        this.state = {
            birthday: moment()
        };
    }

    onBirthdayChange(date) {
        this.setState({
            birthday: date
        });
    }

    render() {
        return (
            <div id="register_form-component">
                <Form action="/signup" id="register_form">
                    <FormInput name="first_name" label="First name"/>
                    <FormInput name="last_name" label="Last name"/>
                    <FormInput name="email" label="Email" type="email"/>
                    <FormInput name="login" label="Login"/>
                    <FormInput name="birthday" label="Birthday">
                        <DatePicker className="form-control"
                                    id="birthday"
                                    placeholderText="Birthday"
                                    selected={this.state.birthday}
                                    onChange={this.onBirthdayChange.bind(this)}/>
                    </FormInput>
                    <FormInput name="password" label="Password repeat" />
                    <FormInput name="password_repeat" label="Password repeat" />
                    <button type="submit" className="btn btn-default">Sign up</button>
                </Form>
            </div>
        );
    }
}