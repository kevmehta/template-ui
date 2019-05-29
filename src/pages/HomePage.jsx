import React from 'react';

import Can from '../utils/Can';

export default class HomePage extends React.Component {

    render() {
        return (
            <Can
                user="user"
                yes={() => (
                    <h1>Home Page</h1>
                )}
            />
        )
    }
}