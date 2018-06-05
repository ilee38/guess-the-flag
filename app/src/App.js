import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import OptionsBar from './OptionsBar.js';
import Flag from './Flag.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      countryOptions : ['Canada', 'USA', 'UK', 'China'],
      correctCountryName : '',
      flagURL : "https://restcountries.eu/data/alb.svg"
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <OptionsBar countries = {this.state.countryOptions} />
        <Flag flagImgURL = {this.state.flagURL} />
      </div>
    );
  }
}

export default App;
