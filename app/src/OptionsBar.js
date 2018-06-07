import React from 'react';
import './OptionsBar.css';

const OptionsBar = (props) => {
    const options = props.countries.map((country, index) =>
      <label htmlFor={index} key={index}>
        <input type="radio" id={index} name="choice" value="countryName" />
        {country}
      </label>
    )
    return(
      <div className="choiceBar">
        {options}
      </div>
    );
}
export default OptionsBar;
