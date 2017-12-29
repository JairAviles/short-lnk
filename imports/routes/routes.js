import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import Link from './../ui/Link';
import Login from './../ui/Login';
import NotFound from './../ui/NotFound';
import Signup from './../ui/Signup';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];
const history = createBrowserHistory();

const onEnterPublicPage = () => {
    if (!Meteor.userId()) {
        history.replace("/");
    }
};

const onEnterPrivatePage = () => {
    if (!Meteor.userId()) {
        history.replace("/links");
    }
}

export const onAuthChanges = (isAuthenticated) => {
    const pathname = location.pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPages.includes(pathname);

    if (isUnauthenticatedPage && isAuthenticated) {
        history.replace("/links");
    } else if (isAuthenticatedPage && !isAuthenticated) {
        history.replace("/");
    }
};

export const routes = (
    <Router history={ history } forceRefresh={true}>
        <div>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/links" component={Link}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
);
