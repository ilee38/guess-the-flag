import React, {Component} from 'react';
import './Flag.css';

const Flag = (props) => {
  return(
      <div class="flag-pic">
        <img src={props.flagImgURL} alt="country flag"/>
      </div>
    );
}
export default Flag;