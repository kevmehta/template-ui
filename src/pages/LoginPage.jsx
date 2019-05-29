import React from 'react';
import { Redirect } from "react-router-dom";

import { AuthConsumer } from "../hoc/auth-context";

const LoginPage = (props) => (
    <AuthConsumer>
        {({ initiateLogin, authenticated }) => (
            authenticated ?
                <Redirect to="/" />
                :
                <div>
                    <button onClick={initiateLogin}>Login</button>
                </div>
        )}
    </AuthConsumer>
);

export default LoginPage;