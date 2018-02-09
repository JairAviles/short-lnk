import React from 'react';

import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLinks from './AddLink';


export default () => {
    return (
        <div>
            <PrivateHeader title="Your Links" />
            <LinksList />
            <AddLinks />
        </div>
    );
};