import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';

import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLinks from './AddLink';

class Link extends React.Component {

    componentWillMount() {
        if (!Meteor.userId()) {
            this.props.history.replace("/"); 
        }    
    }

    render() {
        return  (
            <div>
                <PrivateHeader title="Your Links" /> 
                <LinksList />
                <AddLinks />
            </div>
        )
    }
}


export default withRouter(Link);