import React from 'react';
import './Board.css';

import { useSelector, useDispatch } from 'react-redux';
import { doMove } from './../actions/gameDataActions';

function Square(props) {
  const dispatch = useDispatch();
  const gameData = useSelector((state) => state.gameData);
  const gameId = useSelector((state) => state.gameInfo.gameId);

  function squareClicked() {
    dispatch(doMove(gameId, props.xPos, props.yPos, gameData.nextToMove));
  }

  return (
    <button className="square" onClick={ () => squareClicked() }>
      {props.value}
    </button>
  );
}

export default Square;
