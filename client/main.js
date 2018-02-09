import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';

import { routes, onAuthChanges } from '../imports/routes/routes';
import './../imports/startup/simple-schema-configuration';

Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId();
    onAuthChanges(isAuthenticated);
});

Meteor.startup(() => {
    Session.set('showVisible', true);
    ReactDOM.render(routes, document.getElementById('app'));
});