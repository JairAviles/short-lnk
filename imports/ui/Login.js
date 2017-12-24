import React from 'react';
import { withRouter } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { Meter } from 'meteor/meteor';

class Login extends React.Component {

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
        
        Meteor.loginWithPassword({email}, password, (err) => {
            console.log('Login callback', err);
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
                <h1>Short Link</h1>
                
                    {this.state.error ? <p>{this.state.error}</p> : undefined}

                    <form onSubmit={this.onSubmit.bind(this)}>
                        <input type="email" name="email" ref="email" placeholder="Email" />
                        <input type="password" name="password" ref="password" placeholder="Password" />
                        <button>Login</button>
                    </form>

                <Link to="/signup">Have an acocunt?</Link>

            </div>
        );
    }
}    

export default withRouter(Login);