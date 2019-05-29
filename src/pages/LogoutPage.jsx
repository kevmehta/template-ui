import React from 'react';
import { AuthConsumer } from "../hoc/auth-context";

const LogoutPage = () => (
    <AuthConsumer>
        {({ logout }) => (
            <div>
                <button onClick={logout}>Logout</button>
            </div>
        )}
    </AuthConsumer>
);

export default LogoutPage;