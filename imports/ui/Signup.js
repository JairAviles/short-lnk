import React from 'react';

import { Link } from 'react-router-dom';

export default class Signup extends React.Component {
    render() {
        return  (
            <div>
                <h1> Signup Short Link</h1>

                <Link to="/">Already have an account?</Link>

            </div>
        );
    }
}    