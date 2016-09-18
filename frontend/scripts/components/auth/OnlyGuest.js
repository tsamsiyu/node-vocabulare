import { UserAuthWrapper } from 'redux-auth-wrapper';
import { routerActions } from 'react-router-redux';

export default UserAuthWrapper({
    authSelector: state => state.get('session'),
    redirectAction: routerActions.redirect,
    wrapperDisplayName: 'OnlyGuest',
    failureRedirectPath: '/account',
    predicate: session => session.get('data').get('isGuest'),
    allowRedirectBack: false
});