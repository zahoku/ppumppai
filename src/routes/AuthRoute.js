import React from 'react';
import {Redirect, Route} from 'react-router-dom';

import {SESSION_STORAGE_KEY} from '../constants';

const isAuthenticated = () => {
    let profileObj = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY.PROFILE));
    let returnValue = false;
    if (profileObj && profileObj.isLogin) {
        returnValue = true;
    }
    return returnValue;
};

// const PRIVATE_ROOT = '/';
const PUBLIC_ROOT = '/login';

const AuthRoute = ({component, ...props}) => {
    // const { isPrivate } = component;
    if (isAuthenticated()) {
        // //User is Authenticated
        // if (isPrivate === true) {
        //     //If the route is private the user may proceed.
        //     return <Route { ...props } component={ component } />;
        // }
        // else {
        //     //If the route is public, the user is redirected to the app's private root.
        //     return <Redirect to={ PRIVATE_ROOT } />;
        // }

        return <Route {...props} component={component}/>;
    }
    else {
        //User is not Authenticated
        // if (isPrivate === true) {
        //     //If the route is private the user is redirected to the app's public root.
        //     return <Redirect to={ PUBLIC_ROOT } />;
        // }
        // else {
        //     //If the route is public, the user may proceed.
        //     return <Route { ...props } component={ component } />;
        // }
        if (props.location.pathname === PUBLIC_ROOT) {
            return <Route {...props} component={component}/>;
        } else {
            return <Redirect to={PUBLIC_ROOT}/>;
        }
    }
};

AuthRoute.propTypes = {
    component: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.func
    ])
};

export default AuthRoute;