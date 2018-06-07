import React, { Component } from 'react';
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
      flagURL : '',
      buttonOption : 'GUESS'
    };
    this.getOptions = this.getOptions.bind(this);
    this.getChoice = this.getChoice.bind(this);
  }

  componentDidMount(){
    //make AJAX request to get all country/flag data
    fetch('http://restcountries.eu/rest/v2/all')
    .then(data => data.json())  //get 1st promise and wait 'till it resolves and THEN return the actual data (as json)
    .then(countries => {        //here we now have the json data (inside countries)
      const options = this.getOptions(countries);
      const correctChoice = this.getChoice(options);
      this.setState({
        countryOptions : options.map(obj => obj.name),
        correctCountryName : correctChoice.name,
        flagURL: correctChoice.flag
      });
    })
    .catch(err => console.log(err));
  }

  /*
   * Choose 4 countries from the array countries
  */
  getOptions(countries){
    const arr = [];
    for(let i = 0; i < 4; i++){
      let j = Math.floor(Math.random() * Math.floor(countries.length));
      arr.push(countries[j]);
    }
    return arr;
  }

  /*
   * From the options array, choose one country
  */
  getChoice(options){
    let i = Math.floor(Math.random() * Math.floor(options.length));
    return options[i];
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
