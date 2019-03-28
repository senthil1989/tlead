import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './component/User'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Users />
        </header>
      </div>
    );
  }
}

export default App;
