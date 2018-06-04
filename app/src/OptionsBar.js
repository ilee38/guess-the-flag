import React, {Component} from 'react';
import './OptionsBar.css';

class OptionsBar extends Component{
  constructor(props){
    super(props);
    this.state = {countryOptions : ['Mexico', 'USA', 'Germany', 'UK']};
  }
  render(){
    const options = this.state.countryOptions.map((country, index) =>
      <label for="index" key="index">
        <input type="radio" id="index" name="choice" value="countryName" />
        {country}
      </label>
    )
    return(
      <div class="choiceBar">
        {options}
      </div>
    );
  }
}
export default OptionsBar;
