import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import OptionsBar from './OptionsBar.js';
import Flag from './Flag.js';
import GameButton from './GameButton.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      countryOptions : [],
      correctCountryName : '',
      flagURL : "https://restcountries.eu/data/alb.svg",
      buttonOption : 'GUESS'
    };
    this.getOptions = this.getOptions.bind(this);
  }

  componentDidMount(){
    //make AJAX request to get all country/flag data
    fetch('http://restcountries.eu/rest/v2/all')
    .then(data => data.json())  //get 1st promise and wait 'till it resolves and THEN return the actual data (as json)
    .then(countries => {        //here we now have the json data (inside countries)
      const options = this.getOptions(countries);
      this.setState({
        countryOptions : options,
      });
    })
    .catch((err) =>{
      console.log(err);
    });
    //pick 4 random countries/flags and update state
  }

  getOptions(countries){
    const arr = [];
    for(let i = 0; i < 4; i++){
      arr.push(countries[i].name);
    }
    return arr;
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div id="choice-bar">
          <OptionsBar countries = {this.state.countryOptions} />
          <GameButton buttonAction = {this.state.buttonOption} />
        </div>
        <Flag flagImgURL = {this.state.flagURL} />
      </div>
    );
  }
}

export default App;
