import React, { Component } from 'react'

import App from './App'
import Custom from './Custom'

// import logo from './logo.svg'


import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import {Redirect} from 'react-router'

class Container extends Component {
    render() {
        const { children, match } = this.props;

        return (
            <div className="App">
                <header className="App-header">
                    <img src='logo.svg' className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                    
                </header>
                <div>
                    <Route exact path="/" component={App} />
                    <Route path="/custom" component={Custom} />

                </div>
            </div>
        );
    }
}

export default Container;
