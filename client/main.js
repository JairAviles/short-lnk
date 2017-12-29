import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';

import { routes, onAuthChanges } from '../imports/routes/routes';

Tracker.autorun(() =>{
    const isAuthenticated = !!Meteor.userId();
    onAuthChanges(isAuthenticated);
});

Meteor.startup(() => {
    ReactDOM.render(routes, document.getElementById('app'));
});