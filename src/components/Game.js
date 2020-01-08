import React, { useEffect } from 'react';
import Board from './Board';

import { useSelector, useDispatch } from 'react-redux';
import { updateGameId, updatePlayType } from './../actions/GameIdActions';

function Game(props) {
  const dispatch = useDispatch();

  // Set the game id to the id in the url
  useEffect(() => {
    dispatch(updateGameId(props.match.params.gameId));

    let playType = props.match.params.playType;
    if (playType !== 'X_player' && playType !== 'O_player' && playType !== 'both_players') {
      playType = 'observer';
    }
    dispatch(updatePlayType(playType));
  }, [dispatch, props.match.params]);

  const winner = useSelector((state) => state.gameData.winner);
  let winnerText;
  if (winner !== null && winner !== undefined) {
    winnerText = <h2>Winner: { winner }</h2>;
  }

  const nextToMove = useSelector((state) => state.gameData.nextToMove);
  let nextToMoveText;
  if (nextToMove !== null && nextToMove !== undefined) {
    winnerText = <h2>Next To Move: { nextToMove }</h2>;
  }

  const playType = useSelector((state) => state.gameInfo.playType);
  let playTypeString = '';
  if (playType) {
    playTypeString = playType.replace('_', ' ');
  }

  return (
    <div>
      <Board/>
      { winnerText }
      { nextToMoveText }
      { 'In game as: ' + playTypeString }
    </div>
  );
}

export default Game;
