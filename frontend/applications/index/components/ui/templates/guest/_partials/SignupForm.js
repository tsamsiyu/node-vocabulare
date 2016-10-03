import FormInput from '../../../common/FormInput';
import AjaxForm from '../../../common/AjaxForm';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { browserHistory } from 'react-router';

export default class SignupForm extends React.Component {
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

    handleSignup(request) {
        request.then((response) => {
            if (response.status) {
                browserHistory.push('/signin');
            } else {
                console.error(response.errors);
            }
        }).catch((error) => {
            console.error(error);
        })
    }

    render() {
        return (
            <div id="register_form-component">
                <AjaxForm action="/signup" id="register_form" handle={this.handleSignup.bind(this)}>
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
                    <FormInput name="User[password]" label="Password" type="password" />
                    <FormInput name="User[passwordRepeat]" label="Password repeat" type="password" />
                    <button type="submit" className="btn btn-default">Sign up</button>
                </AjaxForm>
            </div>
        );
    }
}