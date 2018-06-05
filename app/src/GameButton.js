import React, {Component} from 'react';
import './GameButton.css';

const GameButton = (props) => {
  return(
    <button name="button" class="button" >
      {props.buttonAction}
    </button>
  );
}

export default GameButton;