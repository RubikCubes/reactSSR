import React from 'react';
import Container from './Container';
import {Redirect} from 'react-router'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const Routes = props => {
    return (
        <Router>
            <div>
                <Route path='/' component={Container} />

                <Route path='*'>
                    <Redirect to='/' />
                </Route>
            </div>
        </Router>
    )
}

export default Routes