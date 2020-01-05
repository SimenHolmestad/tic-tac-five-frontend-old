import React from 'react';
import './Board.css';

function logPos(xPos, yPos) {
  console.log("xPos is " + xPos + " and yPos is " + yPos);
}

function Square(props) {
  return (
    <button className="square" onClick={ () => logPos(props.xPos, props.yPos) }>
      {props.value}
    </button>
  );
}

export default Square;
