import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Accounts } from 'meteor/accounts-base';

class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: this.props.error || ''
        };
    }

    onSubmit(e) {
        e.preventDefault();

        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();

        Accounts.createUser({email, password}, (err) => {
            console.log('Signup callback', err);
            if (err) {
                this.setState({error: err.reason});
            } else {
                this.setState({error: ''});
            }
        });

    }

    componentWillMount() {
        if (Meteor.userId()) {
            this.props.history.replace("/links"); 
        }    
    }

    render() {
        return  (
            <div>
                <h1> Join Short Link</h1>

                {this.state.error ? <p>{this.state.error}</p> : undefined}

                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="email" name="email" ref="email" placeholder="Email" />
                    <input type="password" name="password" ref="password" placeholder="Password" />
                    <button>Create Account</button>
                </form>

                <Link to="/">Already have an account?</Link>

            </div>
        );
    }
}    

export default withRouter(Signup);