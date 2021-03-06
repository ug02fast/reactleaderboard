import React, { Component } from 'react';
import logo from './logo.svg';
import LeaderBoard from './components/leader_board';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <LeaderBoard />
      </div>
    );
  }
}

export default App;
