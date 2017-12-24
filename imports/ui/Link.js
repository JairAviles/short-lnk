import React from 'react';
import { withRouter } from 'react-router-dom';

import { Accounts } from 'meteor/accounts-base';

class Link extends React.Component {

    onLogout() {
        Accounts.logout();
    }

    componentWillMount() {
        if (!Meteor.userId()) {
            this.props.history.replace("/"); 
        }    
    }

    render() {
        return  (
            <div>
                <h1>Your Links</h1>
                <button onClick={this.onLogout.bind(this)}>Logout</button>
            </div>
        )
    }
}


export default withRouter(Link);