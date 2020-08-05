import React, { useEffect } from 'react';
import Square from './Square';
import './Board.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGameData } from './../actions/gameDataActions';

function Board() {
  const dispatch = useDispatch();
  const gameId = useSelector((state) => state.gameInfo.gameId);

  // Update game data every second
  useEffect(() => {
    if (gameId === '') {
      return undefined;
    }
    dispatch(fetchGameData(gameId));
    const interval = setInterval(() => dispatch(fetchGameData(gameId)), 1000);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch, gameId]);

  // Get gameData and add loading text if there is no gameData
  const gameData = useSelector((state) => state.gameData);
  if (! gameData.boardState) {
    return <h2>Loading...</h2>;
  }

  // Create square components and change "-" to " "
  const squareRows = gameData.boardState.map((squareRow, rowIndex) => {
    return squareRow.map((squareTile, columnIndex) => {
      let value = squareTile;
      if (value === "-") {
        value =  " ";
      }
      return <Square
               value={ value }
               key={ columnIndex }
               xPos={ columnIndex }
               yPos={ rowIndex }/>;
    });
  });

  // Add blinking effect to tiles in the winning line if the game is won
  if(gameData.winner) {
    for (const winningSquare of gameData.winningLine) {
      const yPos = winningSquare[0];
      const xPos = winningSquare[1];
      let value = gameData.boardState[yPos][xPos];

      squareRows[yPos][xPos] = <Square
                                 value={ value }
                                 key={ xPos }
                                 xPos={ xPos }
                                 yPos={ yPos }
                                 blinking={ true }/>;
    }
  }

  // Render the board row by row
  return squareRows.map((squareRow, rowIndex) => {
    return <div className="board-row" key={ rowIndex }>
             { squareRow }
           </div>;
  });
}

export default Board;
