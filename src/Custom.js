import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class App extends Component {
    render() {
        return (
            <div>
                <p className="App-intro">
                    This is a custom Component
                </p>
                <br/>
                <Link to='/'>Home</Link>
            </div>
        )
    }
}

export default App;
