import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import history from './configs/history';

import Auth from "./components/Auth";
import PrivateRoute from './hoc/PrivateRoute';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import HomePage from './pages/HomePage';

class App extends React.Component {
    render() {
        return (
            <Auth>
                <div>
                    <BrowserRouter history={history}>
                        <Switch>
                            <PrivateRoute exact path="/" component={HomePage} />
                            <PrivateRoute path="/logout" component={LogoutPage} />
                            <Route path="/login" component={LoginPage} />
                        </Switch>
                    </BrowserRouter>
                </div>
            </Auth>
        );
    }
}

export default App;
