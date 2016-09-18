import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import { signout } from '../../store/actions/session';

class Nav extends React.Component {
    actionLogout(e) {
        e.preventDefault();
        store.dispatch(signout());
    }

    render() {
        return (
            <div id="nav-component">
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">{this.props.session.appName}</a>
                    </div>
                    <div className="nav navbar-nav navbar-right">
                        <a onClick={this.actionLogout.bind(this)}>Logout</a>
                    </div>
                </nav>
                <br/><br/><br/>
            </div>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        session: store.get('session')
    };
};

export default connect(mapStateToProps)(Nav);