import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthConsumer } from './auth-context';

import Layout from './Layout';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <AuthConsumer>
        {({ authenticated }) => (
            <Route {...rest} render={props => (
                authenticated ? <Layout><Component {...props} /></Layout>
                    :
                    <Redirect to={{ pathname: '/login' }} />
            )} />
        )}
    </AuthConsumer>
);

export default PrivateRoute;