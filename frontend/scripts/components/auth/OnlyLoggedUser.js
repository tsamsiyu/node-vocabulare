import { UserAuthWrapper } from 'redux-auth-wrapper';
import { routerActions } from 'react-router-redux';

export default UserAuthWrapper({
    authSelector: state => state.get('settings'),
    redirectAction: routerActions.redirect,
    wrapperDisplayName: 'OnlyLoggedUser',
    failureRedirectPath: '/signin',
    predicate: settings => !settings.data.state.isGuest,
    allowRedirectBack: false
});