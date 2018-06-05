import React, {Component} from 'react';
import './OptionsBar.css';

const OptionsBar = (props) => {
    const options = props.countries.map((country, index) =>
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
export default OptionsBar;
