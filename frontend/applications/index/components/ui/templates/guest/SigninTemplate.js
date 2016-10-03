import { Link } from 'react-router';

export default class SigninTemplate extends React.Component {
    render() {
        return (
            <div data-component="signin-template">
                <div className="row">
                    <div className="col-xs-12">
                        <h2>Login Form</h2>
                        {/*<LoginForm/>*/}
                        <br/>
                        <Link to="/signup">I'm not registered yet</Link>
                    </div>
                </div>
            </div>
        );
    }
}