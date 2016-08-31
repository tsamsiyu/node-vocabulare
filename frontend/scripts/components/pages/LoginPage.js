import React from "react";
import { connect } from 'react-redux';


class LoginForm extends React.Component {
    render() {
        return (
            <div id="login-page-component">
                <div className="row">
                    <div className="col-xs-12">
                        <form action={this.props.settings.apiUrl + '/signin'} className="form-horizontal">
                            <div className="form-group">
                                <label htmlFor="login">Login</label>
                                <input type="email" className="form-control" id="login" placeholder="Login"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Password"/>
                            </div>
                            <button type="submit" className="btn btn-default">Sign in</button>
                        </form>
                        <br/>
                        <a href={this.props.settings.apiUrl + '/signup'}>I'm not registered yet</a>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        settings: store.get('settings')
    };
};

export default connect(mapStateToProps)(LoginForm);