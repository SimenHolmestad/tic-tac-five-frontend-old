import React, { useState } from 'react';
import { createNewGame } from './../actions/ActiveGamesActions';
import { useDispatch } from 'react-redux';

function NewGame() {
  const [newGameName, setNewGameName] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Create new game</h1>
      <input
        type="text"
        value={newGameName}
        placeholder="Name of game"
        onChange={e => setNewGameName(e.target.value)}
      />
      <button onClick={() => dispatch(createNewGame(newGameName))}>Create game</button>
    </div>
  );
}

export default NewGame;
