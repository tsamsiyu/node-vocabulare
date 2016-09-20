import { UserAuthWrapper } from 'redux-auth-wrapper';
import { routerActions } from 'react-router-redux';

export default UserAuthWrapper({
    authSelector: state => state.get('session'),
    redirectAction: routerActions.redirect,
    wrapperDisplayName: 'OnlyLoggedUser',
    failureRedirectPath: '/signin',
    predicate: session => !session.get('data').get('isGuest'),
    allowRedirectBack: false
});