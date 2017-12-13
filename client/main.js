import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Link from './../imports/ui/Link';
import Login from './../imports/ui/Login';
import NotFound from '../imports/ui/NotFound';
import Signup from './../imports/ui/Signup';

const routes = (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/link" component={Link}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
);

Meteor.startup(() => {
    ReactDOM.render(routes, document.getElementById('app'));
});