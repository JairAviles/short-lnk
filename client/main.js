import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { Tracker } from 'meteor/tracker';
import createBrowserHistory from 'history/createBrowserHistory'

import Link from './../imports/ui/Link';
import Login from './../imports/ui/Login';
import NotFound from '../imports/ui/NotFound';
import Signup from './../imports/ui/Signup';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];
const history = createBrowserHistory();
const routes = (
    <Router history={ history } forceRefresh={true}>
        <div>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/links" component={Link}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
);

Tracker.autorun(() =>{
    const isAuthenticated = !!Meteor.userId();
    const pathname = location.pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPages.includes(pathname);

    console.log('isAuthenticated', isAuthenticated);
    console.log('isAuthenticatedPage', isAuthenticatedPage);
    console.log('isUnauthenticatedPage', isUnauthenticatedPage);

    if (isUnauthenticatedPage && isAuthenticated) {
        history.push("/links");
    } else if (isAuthenticatedPage && !isAuthenticated) {
        history.push("/");
    }

});

Meteor.startup(() => {
    ReactDOM.render(routes, document.getElementById('app'));
});