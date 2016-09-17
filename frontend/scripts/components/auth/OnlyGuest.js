import { UserAuthWrapper } from 'redux-auth-wrapper';
import { routerActions } from 'react-router-redux';

export default UserAuthWrapper({
    authSelector: state => state.get('settings'),
    redirectAction: routerActions.redirect,
    wrapperDisplayName: 'OnlyGuest',
    failureRedirectPath: '/account',
    predicate: settings => settings.get('data').isGuest,
    allowRedirectBack: false
});