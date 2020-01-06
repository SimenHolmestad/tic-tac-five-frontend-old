import React, { useEffect } from 'react';
import Square from './Square';
import './Board.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGameData } from './../actions/gameDataActions';

function Board() {
  const dispatch = useDispatch();
  const gameId = useSelector((state) => state.gameId);

  // Update game data every second
  useEffect(() => {
    dispatch(fetchGameData(gameId));
    const interval = setInterval(() => dispatch(fetchGameData(gameId)), 1000);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch, gameId]);

  // Get gameData and add loading text if there is noe gameData
  const gameData = useSelector((state) => state.gameData);
  if (! gameData.boardState) {
    return <h2>Loading...</h2>;
  }

  // Change "-" to " " in boardState
  const squares = gameData.boardState.map(squareRow => {
    return squareRow.map(squareTile => {
      if (squareTile === "-") {
        return " ";
      } else {
        return squareTile;
      }
    });
  });

  // Render the board row by row
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
