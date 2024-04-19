import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Pages/Landing';


function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                   <Landing />
                </Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;