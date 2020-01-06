import React, { useEffect } from 'react';
import Board from './components/Board';
import { useDispatch } from 'react-redux';
import { updateGameId } from './actions/GameIdActions';

function App() {
  const dispatch = useDispatch();

  // Set the game id to the id described in the .env file
  useEffect(() => {
    dispatch(updateGameId(process.env.REACT_APP_TEST_GAME_ID));
  }, [dispatch]);

  return (
    <div className="App">
      <Board/>
    </div>
  );
}

export default App;
