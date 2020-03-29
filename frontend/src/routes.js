import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import NewIncident from './pages/NewIncident'
import Profile from './pages/Profile'
import Register from './pages/Register'
import Logon from './pages/Logon';

export default function Routes() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={(props) => (
          localStorage.getItem('ongId') != null
            ? <Component {...props} />
            : <Redirect to='/' />
        )} />
      )

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <PrivateRoute path="/profile" component={Profile} />
                <PrivateRoute path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    )
}