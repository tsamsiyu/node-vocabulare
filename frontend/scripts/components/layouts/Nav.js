import React from 'react';
import { connect } from 'react-redux';

class Nav extends React.Component {
    render() {
        return (
            <div id="nav-component">
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">{this.props.settings.appName}</a>
                    </div>
                </nav>
                <br/><br/><br/>
            </div>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        settings: store.get('settings')
    };
};

export default connect(mapStateToProps)(Nav);