import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, auth, ...rest }) => (
    <Route {...rest} render={(props) => (
        auth.username && auth.username.length > 0
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
)


export default ProtectedRoute;