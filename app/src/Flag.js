import React from 'react';
import './Flag.css';

const Flag = (props) => {
  return(
      <div className="flag-pic">
        <img src={props.flagImgURL} alt="country flag"/>
      </div>
    );
}
export default Flag;