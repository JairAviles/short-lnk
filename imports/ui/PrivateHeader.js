import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Accounts } from 'meteor/accounts-base';

class PrivateHeader extends React.Component {

    onLogout() {
        Accounts.logout();
    }

    render() {
        return (
            <header>
                <h1>{ this.props.title }</h1>
                <button onClick={this.onLogout.bind(this)}>Logout</button>
            </header>
        )
    }

}

PrivateHeader.propTypes = {
    title: PropTypes.string.isRequired
} 

export default withRouter(PrivateHeader);