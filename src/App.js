import React, { Component } from 'react';

import './App.css';
import ABC from './ABC.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Easy ABC</h1>
        </div>
        <ABC />
      </div>
    );
  }
}

export default App;
