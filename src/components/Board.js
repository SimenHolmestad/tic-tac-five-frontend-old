import React from 'react';
import Square from './Square';
import './Board.css';

function Board(props) {
  // change "-" to " "
  const squares = props.squares.map(squareRow => {
    return squareRow.map(squareTile => {
      if (squareTile === "-") {
        return " ";
      } else {
        return squareTile;
      }
    });
  });

  // Render 21 rows with 21 squares in each row
  return squares.map((squareRow, rowIndex) => {
    return <div className="board-row" key={ rowIndex }>
              {
                squareRow.map((squareTile, columnIndex) => {
                  return <Square
                           value={ squareTile }
                           key={ columnIndex }
                           xPos={ columnIndex }
                           yPos={ rowIndex }/>;
                })
              }
            </div>;
  });
}

export default Board;
