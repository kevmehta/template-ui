import React from 'react';

import Header from '../components/Header';

const Layout = (props) => (
    <>
        <Header isAuthenticated={props.isAuthenticated} />
        <div>
            {props.children}
        </div>
    </>
);

export default Layout;