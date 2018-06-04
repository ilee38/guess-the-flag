import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import OptionsBar from './OptionsBar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <OptionsBar />
      </div>
    );
  }
}

export default App;
