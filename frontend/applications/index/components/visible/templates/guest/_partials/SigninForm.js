import FormInput from '../../../common/FormInput';
import AjaxForm from '../../../common/AjaxForm';
import store from '../../../../../store';
import { signin } from '../../../../../store/actions/session';

export default class SigninForm extends React.Component {
    loginAction(data) {
        store.dispatch(signin(data));
    }

    render() {
        return (
            <div id="login_form-component">
                <AjaxForm id="login_form" handleForce={this.loginAction.bind(this)}>
                    <FormInput name="User[loginOrEmail]" label="Login"/>
                    <FormInput name="User[password]" type="password" label="Password"/>
                    <button type="submit" className="btn btn-default">Sign in</button>
                </AjaxForm>
            </div>
        );
    }
}