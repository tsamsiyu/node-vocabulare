import React from "react";
import { connect } from 'react-redux';

class LoginForm extends React.Component {
    render() {
        return (
            <div id="login-page-component">
                <form action={this.props.settings.apiUrl}>
                    <input type="text" name="login"/>
                    <input type="password" name="password"/>
                </form>
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