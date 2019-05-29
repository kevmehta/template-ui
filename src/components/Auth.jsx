import React, { Component } from "react";
import * as Msal from 'msal';

import { AUTH_CONFIG } from "../configs/auth-variables";
import { AuthProvider } from "../hoc/auth-context";

// All the Authentication Library things goes here
// Have added code considering MSAL
class Auth extends Component {

    constructor(props) {
        super(props);
        let redirectUri = window.location.origin;
        this.applicationConfig = AUTH_CONFIG;
        this.app = new Msal.UserAgentApplication(this.applicationConfig.clientID, '',
            () => {
                // callback for login redirect
            },
            {
                redirectUri
            }
        );

        this.state = {
            authenticated: false,
        }
    }

    initiateLogin = () => {
        return this.app.loginPopup(this.applicationConfig.graphScopes)
            .then(idToken => {
                this.setState({ authenticated: true });
                const user = this.app.getUser();
                if (user) {
                    return user;
                } else {
                    return null;
                }
            },
                () => {
                    return null;
                }
            );
    };

    logout = () => {
        this.app.logout();
        this.setState({ authenticated: false });
    };

    handleAuthentication = () => {
        return this.app.acquireTokenSilent(this.applicationConfig.graphScopes)
            .then(accessToken => {
                return accessToken;
            },
                error => {
                    return this.app.acquireTokenPopup(this.applicationConfig.graphScopes)
                        .then(accessToken => {
                            return accessToken;
                        },
                            err => {
                                console.error(err);
                            }
                        );
                }
            );
    };

    render() {
        const authProviderValue = {
            ...this.state,
            initiateLogin: this.initiateLogin,
            handleAuthentication: this.handleAuthentication,
            logout: this.logout
        };
        return (
            <AuthProvider value={authProviderValue}>
                {this.props.children}
            </AuthProvider>
        );
    }
}

export default Auth;
