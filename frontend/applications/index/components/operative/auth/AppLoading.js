import { UserAuthWrapper } from 'redux-auth-wrapper';
import { routerActions } from 'react-router-redux';

export default UserAuthWrapper({
    authSelector: state => state.get('session'),
    redirectAction: routerActions.redirect,
    wrapperDisplayName: 'AppStart',
    failureRedirectPath: '/signin',
    predicate: session => session.get('loading')
});