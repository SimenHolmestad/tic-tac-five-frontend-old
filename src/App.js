import React, { useEffect } from 'react';
import Board from './components/Board';
import { useSelector, useDispatch } from 'react-redux';
import { updateGameId } from './actions/GameIdActions';

function App() {
  const dispatch = useDispatch();

  // Set the game id to the id described in the .env file when the page loads
  useEffect(() => {
    dispatch(updateGameId(process.env.REACT_APP_TEST_GAME_ID));
  }, [dispatch]);

  const winner = useSelector((state) => state.gameData.winner);
  let winnerText;
  if (winner !== null && winner !== undefined) {
    winnerText = <h2>winner: { winner }</h2>;
  }

  const nextToMove = useSelector((state) => state.gameData.nextToMove);
  let nextToMoveText;
  if (nextToMove !== null && nextToMove !== undefined) {
    winnerText = <h2>Next To Move: { nextToMove }</h2>;
  }

  return (
    <div className="App">
      <Board/>
      { winnerText }
      { nextToMoveText }
    </div>
  );
}

export default App;
