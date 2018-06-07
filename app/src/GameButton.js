import React from 'react';
import './GameButton.css';

const GameButton = (props) => {
  return(
    <button name="button" className="button" >
      {props.buttonAction}
    </button>
  );
}

export default GameButton;