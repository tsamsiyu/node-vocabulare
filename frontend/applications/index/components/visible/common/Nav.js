import store from '../../../store';
import { signout } from '../../../store/actions/session';
import { connect } from 'react-redux';

@connect((store) => {
    return {
        config: store.get('config')
    };
})
export default class Nav extends React.Component {
    actionLogout(e) {
        e.preventDefault();
        store.dispatch(signout());
    }

    render() {
        return (
            <div data-component="navigation">
                <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">{this.props.config.get('appName')}</a>
                        </div>
                        <div className="navbar-collapse collapse" id="navbar">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#" onClick={this.actionLogout.bind(this)}>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}