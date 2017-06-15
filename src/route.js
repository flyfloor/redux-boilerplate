import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import App from './container/App';

const Routes = () => {
    return (
        <Router>
            <Route path='/' component={App}></Route>
        </Router>
    )
}

export default Routes
