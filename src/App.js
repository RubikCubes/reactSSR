import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <br/>
        <Link to='/custom'>Custom</Link>
      </div>
    );
  }
}

export default App;
